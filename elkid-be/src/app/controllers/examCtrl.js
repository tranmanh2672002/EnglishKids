const questions = require("../models/questionEasyModel");

const examCtrl = {
  getQuestions: async (req, res) => {
    try {
      const questionsArray = await questions.find();
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
