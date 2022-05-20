const express = require('express');
const carsController = require('../controllers/carsController');

const carsRoutes = express.Router();

carsRoutes.get('/cars', carsController.getAllCars);
carsRoutes.post('/cars', carsController.createCar);

module.exports = {
  carsRoutes,
};
