const express = require('express');
const articleController = require('../controllers/articleController');
const { validateToken } = require('../utils/middleware');

const articleRoutes = express.Router();

articleRoutes.get('/', validateToken, articleController.listArticles);

module.exports = articleRoutes;
