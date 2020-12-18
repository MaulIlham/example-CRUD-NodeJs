const express = require('express');
const router = express.Router();
const AuthServices = require('../services/AuthService');
const { userAuthentication } = require('../controllers/UserController');

const authService = new AuthServices();

router.post('/', (req, res, next) => userAuthentication(req, res, authService));

module.exports = router;