const bcrypt = require('bcryptjs');

function hashPass(plainPassword) {
  return bcrypt.hashSync(plainPassword, 10);
}

function verifyHash(enteredPass, userObj) {
  return bcrypt.compareSync(enteredPass, userObj.password);
}

module.exports = {
  hashPass,
  verifyHash,
};
