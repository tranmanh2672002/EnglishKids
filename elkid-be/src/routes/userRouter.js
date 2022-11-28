const express = require('express');
const router = express.Router();
const userCtrl = require('../app/controllers/userCtrl');

router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);
router.get('/allUsers', userCtrl.getAllUsers);
router.post('/updateScore/:id', userCtrl.updateScore);


module.exports = router;