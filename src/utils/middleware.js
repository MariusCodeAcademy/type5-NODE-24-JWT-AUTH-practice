const Joi = require('joi');
const { failResponce } = require('./dbHelpers');
const { verifyJwtToken } = require('./helper');

async function validateUser(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
  });

  try {
    // tikrinimas ar req.body atitinka schema reikalavimus
    await schema.validateAsync(req.body, { abortEarly: false });
    next(); // keliaujam i kita middleware ar controller
  } catch (error) {
    console.log('validateUser error ===', error);
    // map
    const formatedError = error.details.map((detail) => ({
      message: detail.message,
      field: detail.context.key,
    }));
    failResponce(res, formatedError);
  }
}

async function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const tokenGotFromUser = authHeader && authHeader.split(' ')[1];
  // console.log('tokenGotFromUser ===', tokenGotFromUser);
  if (!tokenGotFromUser) return failResponce(res, 'no token', 401);
  const verifyResult = verifyJwtToken(tokenGotFromUser);

  if (verifyResult === false) return failResponce(res, 'invalid token', 403);
  // console.log('verifyResult ===', verifyResult);
  next();
}

module.exports = {
  validateUser,
  validateToken,
};
