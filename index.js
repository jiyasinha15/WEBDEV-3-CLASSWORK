const express = require('express');
const app = express();
const packages = require('./data/tour');
const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());
app.use('/api', tourRoutes);


app.listen(3000, () => {
  console.log("Server is running on 3000");
});