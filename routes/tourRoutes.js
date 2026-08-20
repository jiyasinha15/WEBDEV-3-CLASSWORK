const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Route to get all tours
router.get('/', tourController.getAllTours);

// Route to get a specific tour by ID
router.get('/:id', tourController.getTourById);

module.exports = router;