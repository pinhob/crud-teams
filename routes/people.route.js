const express = require('express');

const router = express.Router();

// const peopleController = require('../controllers/people.controller');

router.get('/', (req, res) => {
  res.send('get people');
});

module.exports = router;