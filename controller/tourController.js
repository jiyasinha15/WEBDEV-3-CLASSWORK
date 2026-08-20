const tourModel = require('../model/tourModel');

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

module.exports = { getAllTours };