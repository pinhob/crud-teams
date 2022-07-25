const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.get('/', teamsController.getAll);

router.get('/:id', teamsController.getById);

router.post('/new', authMiddleware, teamsController.create);

router.put('/:id', authMiddleware, teamsController.updateById);

router.delete('/:id', authMiddleware, teamsController.deleteById);

module.exports = router;