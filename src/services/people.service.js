const People = require('../database/models/People');
const Joi = require('joi');
const errorMessage = require('../utils/errorMessageConstructor');
const checkAndVerifyId = require('../utils/verifyAndValidateId');

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
  checkAndVerifyId(id);

  const person = await People.findById(id);
  if (person === null) throw errorMessage(404, 'Id is not found');

  return person;
}

const deleteById = (id) => {
  checkAndVerifyId(id);

  return People.findByIdAndDelete(id);
}

const updateById = async (id, person) => {
  checkAndVerifyId(id);

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
