const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'tutorials';

async function getTutorialsByUserIdDb(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT * FROM ${tableName}
    WHERE user_id = ?
    `;
    const [tutorialsArray] = await conn.execute(sql, [userId]);
    await conn.close();
    return tutorialsArray;
  } catch (error) {
    console.log('getTutorialsByUserIdDb ===', error);
    return false;
  }
}

module.exports = {
  getTutorialsByUserIdDb,
};
