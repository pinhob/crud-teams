const express = require('express');

const router = express.Router();

const people = require('./people.route');
const auth = require('./auth.route');

router.use('/people', people);
router.use('/auth', auth);

module.exports = router;