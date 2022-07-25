const mongoose = require("../index");

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  age: {
    type: Number,
  }
});

const People = mongoose.model("People", PeopleSchema);

module.exports = People;
