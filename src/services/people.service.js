const People = require('../database/models/People');

const getAll = async () => {
  const people = await People.find({});

  return people;
};

const getById = async (id) => {
  const person = await People.findById(id);

  return person;
}

const create = async (person) => {
  const newPerson = await People.create(person);

  return newPerson;
}

const deleteById = (id) => {
  return People.findByIdAndDelete(id);
}

const updateById = async (id, person) => {
  const updatedPerson = await People.findByIdAndUpdate(id, person);

  return updatedPerson;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
