const { insertUser } = require('../model/authModel');
const { hashPass } = require('../utils/helper');

async function register(req, res) {
  // gauti prisijungimo email ir pass
  const { email, password } = req.body;

  // hashintti pass
  const hashedPassword = hashPass(password);

  // irasyti i duomenu baze su model funkcija
  const insertResult = await insertUser(email, hashedPassword);

  return insertResult === false ? res.status(500) : res.json('user created');
}

module.exports = {
  register,
};
