const express = require('express');
const app = express();
const packages = require('./data/tour');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/packages', (req, res) => {
  res.json(packages);
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});