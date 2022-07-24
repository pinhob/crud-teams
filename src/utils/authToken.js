require('dotenv').config();
const jwt = require('jsonwebtoken');

const API_SECRET = process.env.JWT_SECRET || 'vivo';

const JWT_CONFIG = {
  expiresIn: 86400,
  algorithm: 'HS256',
};

const generateToken = (data = {}) => jwt.sign(data, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};