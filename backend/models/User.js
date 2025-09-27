import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String, required: true, unique: true, lowercase: true, trim: true },
	password: { type: String },
	provider: { type: String, default: 'local' },
	providerId: { type: String, index: true },
	avatar: { type: String },
    // OTP / verification fields
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Date },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.comparePassword = async function (candidate) {
	if (!this.password) return false;
	return bcrypt.compare(candidate, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

