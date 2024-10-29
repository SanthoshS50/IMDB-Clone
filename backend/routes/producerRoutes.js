// producerRoutes.js
const express = require('express');
const router = express.Router();
const producerController = require('../controllers/producerController');

router.post('/', producerController.createProducer);
router.get('/', producerController.getAllProducers);

module.exports = router;
