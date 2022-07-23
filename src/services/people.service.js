const People = require('../database/models/People');

const getAll = async () => {
  const people = await People.find({});

  return people;
};

module.exports = {
  getAll,
};
