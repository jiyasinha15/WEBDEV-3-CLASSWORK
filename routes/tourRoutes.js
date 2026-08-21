const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Route to get all tours
router.get('/tours', tourController.getAllTours);

// Route to search for tours by name query
router.get('/tours/search', tourController.getTourByIdQuery);

// Route to get a specific tour by ID
router.get('/tours/:id', tourController.getTourById);

router.post('/tours', tourController.saveTours);

// Route to update a specific tour by ID
router.put('/tours/:id', tourController.updateTour);

module.exports = router;