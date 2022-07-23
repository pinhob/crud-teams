const express = require('express');

const router = express.Router();

const peopleController = require('../controllers/people.controller');

router.get('/', peopleController.getAll);

router.get('/:id', peopleController.getById);

router.post('/new', peopleController.create);

router.patch('/:id', peopleController.updateById);

router.delete('/:id', peopleController.deleteById);

module.exports = router;