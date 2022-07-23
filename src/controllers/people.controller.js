const peopleService = require('../services/people.service');

const getAll = async (_req, res) => {
  try {
    const people = await peopleService.getAll();

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const person = await peopleService.create(req.body);

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const person = await peopleService.getById(id);

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const person = await peopleService.deleteById(id);

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}