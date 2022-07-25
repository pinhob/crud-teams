const teamsService = require('../services/teams.service');

const create = async (req, res, next) => {
  try {
    const team = await teamsService.create(req.body);

    res.status(201).json(team);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const teams = await teamsService.getAll();

    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await teamsService.getById(id);

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await teamsService.updateById(id, req.body);

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const team = await teamsService.deleteById(id);

    return res.status(200).json(team);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
}