const mongoose = require("mongoose");

const questionEasy = new mongoose.Schema (
  {
    stt: {
      type: Number,
    },
    voice: {
        type: String,
    },
    question_correct: {
        type: Number,
    },
    questions: {
        type: Array,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question-easy", questionEasy);
