const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
};
