const { insertUser, findUserByEmail } = require('../model/authModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');
const { hashPass } = require('../utils/helper');

async function register(req, res) {
  // gauti prisijungimo email ir pass
  const { email, password } = req.body;

  // hashintti pass
  const hashedPassword = hashPass(password);

  // irasyti i duomenu baze su model funkcija
  const insertResult = await insertUser(email, hashedPassword);

  return insertResult === false
    ? failResponce(res)
    : successResponce(res, 'user created');
}
async function login(req, res) {
  // gauti prisijungimo email ir pass
  const { email, password } = req.body;

  // call model fn findUserByEmail(email)
  const findResults = await findUserByEmail(email);
  if (!findResults.length) return failResponce(res, 'email or pass not mach 1');

  const foundUserObj = findResults[0];

  if (verifyHash(foundUserObj)) {
    console.log('password match');
  }

  successResponce(res, findResults);
  // return insertResult === false
  //   ? failResponce(res)
  //   : successResponce(res, 'user created');
}

// asyng fn login (req, res)
// call model fn findUserByEmail(email)
// jei user found bcrypt verify pass
// jei email and pass ok
// generate jwt token
// respond with token

module.exports = {
  register,
  login,
};
