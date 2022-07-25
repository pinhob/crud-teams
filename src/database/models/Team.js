const mongoose = require("../index");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "People",
    },
  ],
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
