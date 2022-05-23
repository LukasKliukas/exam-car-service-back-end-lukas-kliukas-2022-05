const {
  getAllCarsDb,
  insertCarToDb,
  deleteSingleCarDb,
} = require('../model/carsModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getAllCars(req, res) {
  const foundProducts = await getAllCarsDb();
  return foundProducts === false
    ? failResponce(res)
    : successResponce(res, foundProducts);
}
async function createCar(req, res) {
  const newCarData = req.body;
  const { brand, model, number, owner, phone, year } = newCarData;
  const carAddingResult = await insertCarToDb(newCarData);
  if (carAddingResult === false) {
    res.status(500);
    return;
  }
  res.json(carAddingResult);
}
async function deleteCar(req, res) {
  const { id } = req.params;
  const deleteSingleCar = await deleteSingleCarDb(id);
  if (deleteSingleCar === false) {
    res.status(500);
    return;
  }
  if (deleteSingleCar.affectedRows !== 1) {
    res.json('No rows deleted');
    return;
  }
  res.json('Delete success');
}

module.exports = {
  getAllCars,
  createCar,
  deleteCar,
};
