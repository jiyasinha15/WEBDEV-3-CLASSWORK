const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Route to get all tours
router.get('/', tourController.getAllTours);

// Route to search for tours by name query
router.get('/search', tourController.getTourByIdQuery);

// Route to get a specific tour by ID
router.get('/:id', tourController.getTourById);

router.post('/', (req, res) => {
    const newTour = req.body;
    const tours = tourController.getAllTours();
    tours.push(newTour);
    tourController.saveTours(tours);
    res.status(201).json(newTour);
});

module.exports = router;