const peopleService = require('../services/people.service');

const getAll = async (_req, res, next) => {
  try {
    const people = await peopleService.getAll();

    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const person = await peopleService.create(req.body);

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await peopleService.getById(id);

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await peopleService.deleteById(id);

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
}

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await peopleService.updateById(id, req.body);

    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
}