const express = require('express');

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);

module.exports = authRoutes;

// authController.js
// register(req, res)

// authModel.js
// insertUser(email, pass)
