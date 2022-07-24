const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// encrypt the password before saving
UserSchema.pre('save', async function (next) {
  const user = this;
  const SALT_FACTOR = 10;

  const passwordHash = await bcrypt.hash(user.password, SALT_FACTOR);

  user.password = passwordHash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
