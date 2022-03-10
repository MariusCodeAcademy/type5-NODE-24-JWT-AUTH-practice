const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'articles';

async function getArticles() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT * FROM ${tableName}
    `;
    const [articlesArray] = await conn.execute(sql, []);
    await conn.close();
    return articlesArray;
  } catch (error) {
    console.log('getArticles ===', error);
    return false;
  }
}

module.exports = {
  getArticles,
};
