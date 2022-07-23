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
  console.log("AQUI", person);

  const newPerson = await People.create(person);

  console.log("CHEGOU");

  return newPerson;
}

module.exports = {
  getAll,
  getById,
  create,
};
