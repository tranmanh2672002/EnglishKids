const express = require('express');
const router = express.Router();
const courseCtrl = require('../app/controllers/courseCtrl');

router.get('/', courseCtrl.getAllCourses);
router.get('/images/:id', courseCtrl.getCourseImages);
router.get('/video/:id', courseCtrl.getCourseVideo);

module.exports = router;