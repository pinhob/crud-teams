const People = require('../database/models/People');

const create = async (person) => {
  console.log("AQUI", person);

  const newPerson = await People.create(person);

  console.log("CHEGOU");

  return newPerson;
}

const getAll = async () => {
  const people = await People.find({});

  return people;
};

module.exports = {
  getAll,
  create,
};
