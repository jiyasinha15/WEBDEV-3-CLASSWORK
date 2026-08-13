const express = require('express');
const app = express();
const packages = require('./data/tour');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/packages', (req, res) => {
  res.json(packages);
});

app.get('/packages/:id', (req, res) => {
  const packageId = parseInt(req.params.id);
  const selectedPackage = packages.find(item => item.id === packageId);
  res.json(selectedPackage);
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});