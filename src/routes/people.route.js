const express = require('express');

const router = express.Router();

const peopleController = require('../controllers/people.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', peopleController.getAll);

router.get('/:id', peopleController.getById);

router.post('/new', authMiddleware, peopleController.create);

router.patch('/:id', authMiddleware, peopleController.updateById);

router.delete('/:id', authMiddleware, peopleController.deleteById);

module.exports = router;