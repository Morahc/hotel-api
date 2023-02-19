import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'Email field is required'],
    },
    password: {
      type: String,
      required: [true, 'Password field is required'],
    },
    role: {
      type: String,
      enum: ['guest', 'admin'],
      default: 'guest',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;
