const Team = require("../database/models/Team");
const Joi = require('joi');
const errorMessage = require('../utils/errorMessageConstructor');

const TeamSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  members: Joi.array().items(Joi.string()),
});

const create = async (data) => {
  const { error } = TeamSchema.validate(data);
  if (error) throw errorMessage(400, error.message);

  const teamAlreadyExists = await Team.findOne({ name: data.name });

  if (teamAlreadyExists) throw errorMessage(409, 'Team already exists');

  const newTeam = await (await Team.create(data)).populate('members');

  return newTeam;
};

module.exports = {
  create,
};
