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

const getByIdQuery = (id) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes({query}));
}

const save = (tours) => {
    fs.writeFileSync(tourFilePath, JSON.stringify({ tours }, null, 2));
}

module.exports = { getAll, getById, getByIdQuery, save };