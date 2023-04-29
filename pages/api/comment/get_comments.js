import mongoose from "mongoose";
import connect from "../../../database/connect";
import Comments from "../../../models/comments";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {post_id} = req.body;
    const comments = await Comments.find({post_id: post_id});
    if (comments) {
      res.status(200).json(comments);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
