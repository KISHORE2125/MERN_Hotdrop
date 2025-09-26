import express from "express";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const SESSION_SECRET = process.env.SESSION_SECRET || 'change_me';
const MONGO_URI = process.env.MONGO_URI; // expect full connection string
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'hotdrop';

// CORS
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

// Sessions
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Google strategy using env vars
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const CALLBACK_PATH = '/auth/google/callback';
const CALLBACK_URL = `http://localhost:${PORT}${CALLBACK_PATH}`;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => done(null, profile)
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get(CALLBACK_PATH,
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to frontend after successful auth
    res.redirect(`${FRONTEND_URL}/?auth=success`);
  }
);

app.get('/api/user', (req, res) => {
  if (req.user) res.json(req.user);
  else res.status(401).json({ message: 'Not logged in' });
});

// Connect to MongoDB then start server
async function start() {
  if (!MONGO_URI) {
    console.warn('MONGO_URI not set. Skipping MongoDB connection.');
  } else {
    try {
      await mongoose.connect(MONGO_URI, {
        dbName: MONGO_DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB (database: ' + MONGO_DB_NAME + ')');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err.message);
      process.exit(1);
    }
  }

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

start();
