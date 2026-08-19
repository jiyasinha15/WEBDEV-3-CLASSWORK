const fs = require('fs');
const path = require('path');
const tourFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const tourData = fs.readFileSync(tourFilePath, 'utf-8');
    return JSON.parse(tourData).tours;
};

const getById = (id) => {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}

module.exports = {
    getAll,
    getById
};