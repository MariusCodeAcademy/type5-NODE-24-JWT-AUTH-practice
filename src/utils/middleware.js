const Joi = require('joi');
const { failResponce } = require('./dbHelpers');

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
    failResponce(res, error);
  }
}

module.exports = {
  validateUser,
};
