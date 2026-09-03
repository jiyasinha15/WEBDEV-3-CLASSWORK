const express = require('express');

const app = express();

// const tourRoutes = require('./routes/tourRoutes');
// const userRoutes = require('./routes/userRoutes');

// app.use(express.json());

// client -> Request -> Middleware1 -> Middleware2 -> Response

// const middleware1 = (req, res, next) => {
//     console.log('Middleware 1 executed');
//     next();
// }

// const middleware2 = (req, res, next) => {
//     console.log('Middleware 2 executed');
//     next();
// }

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};



const checkAge = (req, res, next) => {
  const age = 1;
  if (age < 18) {
    return res.status(403).json({ message: "Yor are not allowed to access this resource" });
  }
  next()
};

app.use(checkAge);

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Tour APIs
// app.use('/api', tourRoutes);

// User Persona APIs
// app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});