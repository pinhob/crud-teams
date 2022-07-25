const express = require('express');

const router = express.Router();

const people = require('./people.route');
const teams = require('./teams.route');
const auth = require('./auth.route');

router.use('/auth', auth);
router.use('/people', people);
router.use('/teams', teams);

module.exports = router;