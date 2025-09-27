import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const pendingUserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, lowercase: true, trim: true, index: true },
  password: { type: String, required: true },
  provider: { type: String, default: 'local' },
  otp: { type: String },
  otpExpires: { type: Date },
}, { timestamps: true });

pendingUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

pendingUserSchema.methods.comparePassword = async function (candidate) {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

const PendingUser = mongoose.models.PendingUser || mongoose.model('PendingUser', pendingUserSchema);
export default PendingUser;
