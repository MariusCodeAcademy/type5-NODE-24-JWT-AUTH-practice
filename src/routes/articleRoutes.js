const express = require('express');
const articleController = require('../controllers/articleController');

const articleRoutes = express.Router();

articleRoutes.get('/', articleController.listArticles);

module.exports = articleRoutes;
