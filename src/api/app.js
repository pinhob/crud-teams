const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('me contrata! :)');
});

module.exports = app;
