const People = require('../database/models/People');
const Joi = require('joi');
const errorMessage = require('../utils/errorMessageConstructor');
const verifyId = require('../utils/verifyId');

const PersonSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  city: Joi.string(),
  age: Joi.number(),
});

const create = async (person) => {
  const { error } = PersonSchema.validate(person);
  if (error) throw errorMessage(400, error.message);

  const newPerson = await People.create(person);

  return newPerson;
}

const getAll = async () => {
  const people = await People.find({});

  return people;
};

const getById = async (id) => {
  const idIsValid = verifyId(id);
  if (!idIsValid) throw errorMessage(400, 'Id is not in a valid format');

  const person = await People.findById(id);
  if (person === null) throw errorMessage(404, 'Id is not found');

  return person;
}

const deleteById = (id) => {
  const idIsValid = verifyId(id);
  if (!idIsValid) throw errorMessage(400, 'Id is not in a valid format');

  return People.findByIdAndDelete(id);
}

const updateById = async (id, person) => {
  const idIsValid = verifyId(id);
  if (!idIsValid) throw errorMessage(400, 'Id is not in a valid format');

  const updatedPerson = await People.findByIdAndUpdate(id, person, { new: true });
  if (updatedPerson === null) throw errorMessage(404, 'Id is not found');

  return updatedPerson;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
