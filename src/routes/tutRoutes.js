const express = require('express');
const controller = require('../controllers/tutController');
const {
  validateToken,
  validateTokenAllTutorials,
} = require('../utils/middleware');

const tutRoutes = express.Router();

// GET /user-tutorials/:user_id (tik su token)
tutRoutes.get(
  '/user-tutorials/:user_id',
  validateToken,
  controller.getTutorialByUserId,
);
tutRoutes.get('/tutorials', validateTokenAllTutorials, controller.getTutorials);

// TODO gauti tik tam vartotojui priklausancius turialus, pasiimti user_id id token
// tutRoutes.get('/', validateToken, controller.getTutorialByUserId);

module.exports = tutRoutes;

// tutModel.js
// getTutorialByUserIdDb()
// SELECT * FROM `tutorials` WHERE user_id = 5
