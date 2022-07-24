const express = require('express');
const { errorMiddleware } = require('../middlewares/errorMiddleware');
const routes = require('../routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('me contrata! :)');
});

app.use('/v1/', routes);

app.use(errorMiddleware);

module.exports = app;
