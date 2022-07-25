const Team = require("../database/models/Team");
const Joi = require('joi');
const errorMessage = require('../utils/errorMessageConstructor');
const verifyId = require('../utils/verifyId');

const TeamSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  members: Joi.array().items(Joi.string()),
});

const checkAndVerifyId = (id) => {
  const idIsValid = verifyId(id);

  if (!idIsValid) throw errorMessage(400, 'Id is not in a valid format');
};

const create = async (data) => {
  const { error } = TeamSchema.validate(data);
  if (error) throw errorMessage(400, error.message);

  const teamAlreadyExists = await Team.findOne({ name: data.name });

  if (teamAlreadyExists) throw errorMessage(409, 'Team already exists');

  const newTeam = await (await Team.create(data)).populate('members');

  return newTeam;
};

const getAll = async () => {
  return await Team.find({});
};

const getById = async (id) => {
  checkAndVerifyId(id);

  const team = await Team.findById(id).populate('members');

  if (!team) throw errorMessage(404, 'Team not found');

  return team;
};

const updateById = (id, data) => {
  checkAndVerifyId(id);

  const updatedTeam = Team.findByIdAndUpdate(id, data, { new: true }).populate('members');

  if (!updatedTeam) throw errorMessage(404, 'Id is not found');

  return updatedTeam;
};

const deleteById = async (id) => {
  checkAndVerifyId(id);

  const team = await Team.findByIdAndDelete(id);

  if (!team) throw errorMessage(404, 'Id is not found');

  return team;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
