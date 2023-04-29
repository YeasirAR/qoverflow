import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  post_id: {
    type: Number,
    required: true,
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

const Comments =
  mongoose.models.comments || mongoose.model("comments", commentsSchema);

export default Comments;
