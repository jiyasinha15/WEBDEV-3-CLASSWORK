const tourModel = require('../models/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

// Get a tour by Id
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: 'Tour not found' });
    }
};

module.exports = {
    getAllTours,
    getTourById
};