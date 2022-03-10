const express = require('express');
const authController = require('../controllers/authController');
const { validateUser } = require('../utils/middleware');

const authRoutes = express.Router();

authRoutes.post('/register', validateUser, authController.register);
authRoutes.post('/login', validateUser, authController.login);

module.exports = authRoutes;
