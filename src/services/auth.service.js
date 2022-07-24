const User = require('../database/models/User');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const errorMessage = require('../utils/errorMessageConstructor');
const { generateToken } = require('../utils/authToken');

const authSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

const register = async (data) => {
  const { error } = authSchema.validate(data);
  if (error) throw (errorMessage(400, error.message));

  const userExists = await User.findOne({ email: data.email });
  if (userExists) throw (errorMessage(400, 'User already exists'));

  const user = await User.create(data);
  const token = generateToken({ id: user._id });

  return { user, token };
};

const login = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email }).select('+password');
  if (!user) throw errorMessage(400, 'Invalid email or password');

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) throw errorMessage(400, 'Invalid email or password');

  const token = generateToken({ id: user._id });

  return { user, token };
};

module.exports = {
  register,
  login,
};
