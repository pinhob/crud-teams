const mongoose = require('mongoose');
const errorMessage = require('./errorMessageConstructor');

const verifyId = (id) => mongoose.Types.ObjectId.isValid(id);

const checkAndVerifyId = (id) => {
  const idIsValid = verifyId(id);

  if (!idIsValid) throw errorMessage(400, 'Id is not in a valid format');
};

module.exports = checkAndVerifyId;