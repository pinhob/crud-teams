//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/teams';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Logs the successfull connection status
// db.once("open", function () {
//   console.log("Connected successfully");
// });

module.exports = mongoose;
