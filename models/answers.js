import mongoose from "mongoose";

const answersSchema = new mongoose.Schema({
  post_id: {
    type: Number,
    required: true,
  },
  vote: {
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
  body: {
    type: String,
    required: true,
  },
});

const Answers =
  mongoose.models.answers || mongoose.model("answers", answersSchema);

export default Answers;
