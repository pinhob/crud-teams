const teamsService = require('../services/teams.service');

const create = async (req, res, next) => {
  try {
    const team = await teamsService.create(req.body);

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
}