let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');

// Express Route
const studentRoute = require('../backend/routes/students');

// Connecting mongoDB Database
require('./database/db')();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});