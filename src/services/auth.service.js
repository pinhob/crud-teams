const User = require('../database/models/User');
const Joi = require('joi');
const errorMessage = require('../utils/errorMessageConstructor');

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

  return user;
};

module.exports = {
  register,
};
