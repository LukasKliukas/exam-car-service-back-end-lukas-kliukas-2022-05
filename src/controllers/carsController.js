const { getAllCarsDb } = require('../model/carsModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getAllCars(req, res) {
  const foundProducts = await getAllCarsDb();
  return foundProducts === false
    ? failResponce(res)
    : successResponce(res, foundProducts);
}

module.exports = {
  getAllCars,
};
