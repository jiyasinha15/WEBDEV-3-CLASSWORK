const fs = require('fs');
const path = require('path');

const tourFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const toursData = fs.readFileSync(tourFilePath, 'utf-8');
    return JSON.parse(toursData).tours;
};

const getById = (id) => {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
};

const getByIdQuery = (query) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query));
};

const save = (newTour) => {
    const tours = getAll();
    tours.push(newTour);
    fs.writeFileSync(tourFilePath, JSON.stringify({ tours }), 'utf-8');
};

const update = (id, updatedTour) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index !== -1) {
        tours[index] = { ...tours[index], ...updatedTour };
        fs.writeFileSync(tourFilePath, JSON.stringify({ tours }), 'utf-8');
    }
    return null;
};

module.exports = { getAll, getById, getByIdQuery, save, update };