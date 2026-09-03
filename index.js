// const express = require('express');
// const app = express();
// const packages = require('./data/tour');
// const tourRoutes = require('./routes/tourRoutes');

// app.use(express.json());
// app.use('/api', tourRoutes);


// app.listen(3000, () => {
//   console.log("Server is running on 3000");
// });


const express = require('express');

const app = express();

const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Tour APIs
app.use('/api', tourRoutes);

// User Persona APIs
app.use('/api', userRoutes);

app.listen(3000, () => {
console.log('Server is running on port 3000');
});