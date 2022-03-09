const { insertUser, findUserByEmail } = require('../model/authModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');
const { hashPass, verifyHash, generateJwtToken } = require('../utils/helper');

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

  if (findResults === false) return failResponce(res);
  if (!findResults.length) return failResponce(res, 'email or pass not mach 1');

  const foundUserObj = findResults[0];

  if (!verifyHash(password, foundUserObj)) {
    // slaptazodziai nesutapo
    return failResponce(res, 'email or pass not match 2');
  }
  // generate jwt token
  const token = generateJwtToken(foundUserObj);
  // console.log('password match');
  successResponce(res, token);
}

module.exports = {
  register,
  login,
};
