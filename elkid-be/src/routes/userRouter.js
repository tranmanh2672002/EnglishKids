const express = require('express');
const router = express.Router();
const userCtrl = require('../app/controllers/userCtrl');

router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);
router.get('/allUsers', userCtrl.getAllUsers);

module.exports = router;