const questionEasies = require("../models/questionEasyModel");
const questionMediums = require("../models/questionMediumModel");

const examCtrl = {
  getQuestionEasies: async (req, res) => {
    try {
      const questionsArray = await questionEasies.find();
      if (questionsArray) {
        return res.json(questionsArray);
      } else {
        return res.json("khong co gi");
      }
    } catch (err) {
      return res.json({ msg: "lỗi catch" });
    }
  },
  getQuestionMediums: async (req, res) => {
    try {
      const questionsArray = await questionMediums.find();
      if (questionsArray) {
        return res.json(questionsArray);
      } else {
        return res.json("khong co gi");
      }
    } catch (err) {
      return res.json({ msg: "lỗi catch" });
    }
  },
};

module.exports = examCtrl;
