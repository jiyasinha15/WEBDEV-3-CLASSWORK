const tourModel = require('../model/tourModel');

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    return res.json(tour);
};

const getTourByIdQuery = (req, res) => {
    const query = req.query.name;
    const tours = tourModel.getTourByIdQuery(query);
    if (tours.length === 0) {
        return res.status(404).json({ message: 'No tours found matching the query' });
    }
    return res.json(tours);
};

module.exports = { getAllTours, getTourById, getTourByIdQuery   };