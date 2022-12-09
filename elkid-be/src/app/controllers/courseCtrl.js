const courses = require("../models/courseModel");
const images = require("../models/imageModel");

const courseCtrl = {
  getAllCourses: async (req, res) => {
    try {
      const allCourses = await courses.find();
      if (allCourses) {
        res.json(allCourses);
      } else {
        res.send("Not courses");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getCourseImages: async (req, res) => {
    try {
      const course = await courses.findOne({ _id: req.params.id });
      const imageArray = await images.find({ id: req.params.id });
      if (course && imageArray) {
        return res.json({ course, imageArray });
      }
      return res.json("Không tìm thấy id");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getCourseVideo: async (req, res) => {
    try {
      const course = await courses.find({ _id: req.params.id });
      if (course) {
        return res.json(course);
      }
      return res.json("Không tìm thấy id");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = courseCtrl;
