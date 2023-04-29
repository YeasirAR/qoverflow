import mongoose from "mongoose";
import connect from "../../../database/connect";
import Answers from "../../../models/answers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const { post_id, todo } = req.body;
    if (todo === "upvote") {
      const answers = await Answers.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { vote: 1 } }
      );
      if (answers) {
        res.status(200).json({ message: "Vote updated successfully" });
      } else {
        res.status(409).json({ message: "Something went wrong" });
      }
    } else if (todo === "downvote") {
      const answers = await Answers.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { vote: -1 } }
      );
      if (answers) {
        res.status(200).json({ message: "Vote updated successfully" });
      } else {
        res.status(409).json({ message: "Something went wrong" });
      }
    }
  }
}
