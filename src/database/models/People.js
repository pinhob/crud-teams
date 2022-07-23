const mongoose = require("../index");

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
});

const People = mongoose.model("People", PeopleSchema);

module.exports = People;
