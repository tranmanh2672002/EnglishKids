const express = require('express');
const router = express.Router();
const examCtrl = require('../app/controllers/examCtrl');

router.get('/question-easy', examCtrl.getQuestions);

module.exports = router;