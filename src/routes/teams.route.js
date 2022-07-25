const express = require('express');
const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/new', teamsController.create);

module.exports = router;