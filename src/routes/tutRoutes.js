const express = require('express');
const controller = require('../controllers/tutController');

const tutRoutes = express.Router();

// GET /user-tutorials/:user_id (tik su token)
tutRoutes.get('/:user_id', controller.getTutorialByUserId);

module.exports = tutRoutes;

// tutModel.js
// getTutorialByUserIdDb()
// SELECT * FROM `tutorials` WHERE user_id = 5
