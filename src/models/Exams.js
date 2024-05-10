const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExamsModel = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Students",
    required: true,
  },
  exam_details: [
    {
      chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapters",
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
  createtedAt: new Date.now(),
  updatetedAt: {
    type: Date,
    default: new Date.now(),
  },
  deletetedAt: {
    type: Date,
    default: null,
  },
});

const Exams = mongoose.model("Exams", ExamsModel);

module.exports = Exams;
