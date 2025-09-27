import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import rateLimit from 'express-rate-limit';
import csurf from 'csurf';
import User from './models/User.js';

// Load .env in backend folder
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const PORT = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'hotdrop';
const SESSION_SECRET = process.env.SESSION_SECRET || 'change_me';

const app = express();

// Basic security middleware
app.use(helmet());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Rate limiter for auth endpoints
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 60 });

// Connect to MongoDB if MONGO_URI is set — required for persisting Google users
async function connectMongo() {
	if (!MONGO_URI) {
		console.warn('MONGO_URI not set — Google signins will not be persisted. Set MONGO_URI to enable persistence.');
		return;
	}
	if (mongoose.connection.readyState === 1) return;
	await mongoose.connect(MONGO_URI, { dbName: MONGO_DB_NAME });
	console.log('Connected to MongoDB (' + MONGO_DB_NAME + ')');
}

// Session store: use MongoStore when MONGO_URI set, otherwise fallback to memory (note: memory not for prod)
const sessOptions = {
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		maxAge: 1000 * 60 * 60 * 24 * 7,
	}
};
if (MONGO_URI) {
	sessOptions.store = MongoStore.create({ mongoUrl: MONGO_URI, dbName: MONGO_DB_NAME });
}
app.use(session(sessOptions));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// CSRF protection: cookie-based
const csrfProtection = csurf({ cookie: true });
app.get('/api/csrf-token', csrfProtection, (req, res) => res.json({ csrfToken: req.csrfToken() }));

// Passport serialize/deserialize: store only user id
passport.serializeUser((user, done) => {
	try {
		const id = user && user._id ? String(user._id) : undefined;
		done(null, id);
	} catch (err) {
		done(err);
	}
});
passport.deserializeUser(async (id, done) => {
	try {
		if (!id) return done(null, null);
		await connectMongo();
		const u = await User.findById(id).lean();
		done(null, u || null);
	} catch (err) {
		done(err);
	}
});

// Google OAuth strategy — only register when credentials and MONGO_URI are provided
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const CALLBACK_PATH = '/auth/google/callback';
const CALLBACK_URL = `${process.env.BACKEND_ROOT || `http://localhost:${PORT}`}${CALLBACK_PATH}`;

if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
	passport.use(new GoogleStrategy({
		clientID: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		callbackURL: CALLBACK_URL
	}, async (accessToken, refreshToken, profile, done) => {
		try {
			// Ensure DB ready before persisting
			await connectMongo();
			const email = profile.emails && profile.emails[0] && profile.emails[0].value;
			// Enforce gmail-only for Google signins
			if (email && !/^[^@\s]+@gmail\.com$/i.test(String(email).trim().toLowerCase())) {
				return done(null, false, { message: 'Only Gmail accounts are allowed.' });
			}
			const providerId = profile.id;

			// Find existing user by providerId first, then by email (to link accounts)
			let user = null;
			if (providerId) user = await User.findOne({ providerId }).exec();
			if (!user && email) user = await User.findOne({ email }).exec();

			if (user) {
				// Update profile fields if needed
				const patch = {};
				if (!user.providerId && providerId) patch.providerId = providerId;
				if (!user.provider || user.provider !== 'google') patch.provider = 'google';
				const avatar = profile.photos && profile.photos[0] && profile.photos[0].value;
				if (avatar && user.avatar !== avatar) patch.avatar = avatar;
				if (Object.keys(patch).length) {
					Object.assign(user, patch);
					await user.save();
				}
				return done(null, user);
			}

			// Create new user record for Google sign-in
			const newUser = new User({
				name: profile.displayName || '',
				email: email || undefined,
				provider: 'google',
				providerId,
				avatar: profile.photos && profile.photos[0] && profile.photos[0].value
			});
			await newUser.save();
			return done(null, newUser);
		} catch (err) {
			return done(err);
		}
	}));
} else {
	console.warn('Google OAuth credentials not set — Google sign-in disabled. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to enable.');
}

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get(CALLBACK_PATH,
	passport.authenticate('google', { failureRedirect: '/?auth=fail' }),
	(req, res) => {
		// Successful auth — redirect to frontend
		res.redirect(`${FRONTEND_URL}/?auth=success`);
	}
);

// Return current user
app.get('/api/user', (req, res) => {
	if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
	res.json(req.user);
});

// Apply rate limiter to auth-related endpoints where appropriate
app.use('/api/', authLimiter);

// Minimal health endpoint
app.get('/health', (req, res) => res.json({ ok: true }));

// Signup endpoint - creates a local user and starts a session
app.post('/api/signup', async (req, res) => {
	try {
		const { name, email, password } = req.body || {};
		if (!name || !email || !password) {
			return res.status(400).json({ message: 'Name, email and password are required.' });
		}

		// Strictly require Gmail addresses
		const emailValue = (email || '').trim().toLowerCase();
		if (!/^[^@\s]+@gmail\.com$/i.test(emailValue)) {
			return res.status(400).json({ message: 'Only Gmail addresses are allowed.' });
		}
		await connectMongo();
		// Prevent duplicate emails
		const existing = await User.findOne({ email }).exec();
		if (existing) return res.status(409).json({ message: 'Email already Exist.' });

		const user = new User({ name, email, password, provider: 'local' });
		await user.save();

		// Login the user (establish session)
		// Establish session manually to avoid calling passport's req.login (which may attempt session.regenerate)
		if (!req.session) {
			return res.status(500).json({ message: 'Session not available' });
		}
		req.session.passport = { user: String(user._id) };
		req.session.save((err) => {
			if (err) {
				console.error('Failed to save session after signup:', err);
				return res.status(500).json({ message: 'Signup succeeded but session save failed.' });
			}
			const safe = { _id: user._id, name: user.name, email: user.email, provider: user.provider, avatar: user.avatar };
			return res.status(201).json({ message: 'Signup successful', user: safe });
		});
	} catch (err) {
		console.error('Signup error:', err);
		return res.status(500).json({ message: 'Server error during signup' });
	}
});

// Signin endpoint - verifies credentials and starts a session
app.post('/api/signin', async (req, res) => {
	try {
		const { email, password } = req.body || {};
		if (!email || !password) return res.status(400).json({ message: 'Email and password are required.' });

		// Enforce gmail-only addresses
		const emailValue = (email || '').trim().toLowerCase();
		if (!/^[^@\s]+@gmail\.com$/i.test(emailValue)) {
			return res.status(400).json({ message: 'Only Gmail addresses are allowed.' });
		}

		await connectMongo();
		const user = await User.findOne({ email: emailValue }).exec();
		if (!user) return res.status(401).json({ message: 'Invalid credentials or Password' });

		const ok = await user.comparePassword(password);
		if (!ok) return res.status(401).json({ message: 'Invalid credentials or Password' });

		// Login establishes a session
		// Establish session manually to avoid calling passport's req.login
		if (!req.session) {
			return res.status(500).json({ message: 'Session not available' });
		}
		req.session.passport = { user: String(user._id) };
		req.session.save((err) => {
			if (err) {
				console.error('Failed to save session after signin:', err);
				return res.status(500).json({ message: 'Signin succeeded but session save failed.' });
			}
			const safe = { _id: user._id, name: user.name, email: user.email, provider: user.provider, avatar: user.avatar };
			return res.json({ message: 'Signin successful', user: safe });
		});
	} catch (err) {
		console.error('Signin error:', err);
		return res.status(500).json({ message: 'Server error during signin' });
	}
});

// Logout endpoint - destroys session and clears cookie
app.post('/api/logout', (req, res) => {
	try {
		// Avoid calling passport's req.logout which may attempt session.regenerate
		const cookieOptions = {
			path: '/',
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		};

		if (req.session) {
			req.session.destroy((err) => {
				if (err) {
					console.error('Session destroy error:', err);
				}
				res.clearCookie('connect.sid', cookieOptions);
				return res.json({ message: 'Logged out' });
			});
		} else {
			res.clearCookie('connect.sid', cookieOptions);
			return res.json({ message: 'Logged out' });
		}
	} catch (err) {
		console.error('Logout error:', err);
		return res.status(500).json({ message: 'Server error during logout' });
	}
});

// Start server — if MONGO_URI available and Google configured, attempt connection at startup for reliability
async function start() {
	try {
		if (MONGO_URI && GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
			await connectMongo();
		}
		app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
	} catch (err) {
		console.error('Startup error:', err);
		process.exit(1);
	}
}

start();

