const express = require('express');
const router = express.Router();
const examCtrl = require('../app/controllers/examCtrl');

router.get('/question-easy', examCtrl.getQuestionEasies);
router.get('/question-medium', examCtrl.getQuestionMediums);

module.exports = router;