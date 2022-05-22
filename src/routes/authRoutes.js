const express = require('express');
const authController = require('../controllers/authController');
const { validateUser, validateUserWithName } = require('../utils/middleware');
const authRoutes = express.Router();

authRoutes.post('/register', validateUserWithName, authController.register);
authRoutes.post('/login', validateUser, authController.login);

module.exports = authRoutes;
