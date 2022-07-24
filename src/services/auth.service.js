const User = require('../database/models/User');

const register = async (data) => {
  const user = await User.create(data);

  return user;
};

module.exports = {
  register,
};
