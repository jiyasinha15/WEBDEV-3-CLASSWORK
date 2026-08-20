const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Route to get all tours
router.get('/tours', tourController.getAllTours);

module.exports = router;