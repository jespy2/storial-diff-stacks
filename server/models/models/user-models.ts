import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const User = new mongoose.Schema(
  {
    email: { type: String, required: [true, 'Your email is required'], unique: true },
    username: { type: String, required: [true, 'Your username is required'], unique: true },
    password: { type: String, required: [true, 'Your password is required'] },
    books: { type: Array, required: true },
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps: true },
);

User.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

export default mongoose.model('users', User);