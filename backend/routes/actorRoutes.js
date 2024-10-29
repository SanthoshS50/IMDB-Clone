// actorRoutes.js
const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.post('/', actorController.createActor);
router.get('/', actorController.getAllActors);

module.exports = router;
