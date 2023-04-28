import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  post_id: {
    type: Number,
    required: true,
  },
  vote: {
    type: Number,
    default: 0,
  },
  answers: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    required: false,
  },
  authorUsername: {
    type: String,
    required: true,
  },
  authorImageUrl: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  comment_list: [
    {
      type: Number,
    },
  ],
  answer_list: [
    {
      type: Number,
    },
  ],
  tags_list: [
    {
      type: String,
    },
  ],
});

const Questions =
  mongoose.models.questions || mongoose.model("questions", questionsSchema);

export default Questions;
