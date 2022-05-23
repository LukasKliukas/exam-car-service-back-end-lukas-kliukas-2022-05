const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');
const tableName = 'cars';

async function getAllCarsDb() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM ${tableName}`;
    const [rows] = await conn.execute(sql);
    await conn.end();
    return rows;
  } catch (error) {
    console.log('getAllCarsDb ===', error);
    return false;
  }
}
async function insertCarToDb(newCarData) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${tableName} (brand,model,number,owner,phone,year) VALUES (?,?,?,?,?,?)`;
    const { brand, model, number, owner, phone, year } = newCarData;
    const [insertResult] = await conn.execute(sql, [
      brand,
      model,
      number,
      owner,
      phone,
      year,
    ]);
    await conn.end();
    return insertResult;
  } catch (error) {
    console.log('Error inserting data', error);
    res.status(500).send('Error in insertCarToDb');
  }
}
async function deleteSingleCarDb(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM ${tableName} WHERE id = ? LIMIT 1`;
    const [deleteResult] = await conn.execute(sql, [id]);
    await conn.end();
    return deleteResult;
  } catch (error) {
    console.log('deleteSingleCarDb ===', error);
    return false;
  }
}
module.exports = {
  getAllCarsDb,
  insertCarToDb,
  deleteSingleCarDb,
};
