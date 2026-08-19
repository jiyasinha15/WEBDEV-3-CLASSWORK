const tourModel = require('../models/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

module.exports = {
    getAllTours,
    getTourById
};