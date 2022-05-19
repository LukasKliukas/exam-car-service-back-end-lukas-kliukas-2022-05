const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');
const tableName = 'cars';

async function getAllCarsDb() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM ${tableName}`;
    const [rows] = await conn.execute(sql);
    await conn.close();
    return rows;
  } catch (error) {
    console.log('getAllCarsDb ===', error);
    return false;
  }
}

module.exports = {
  getAllCarsDb,
};
