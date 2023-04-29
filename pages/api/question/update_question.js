import mongoose from "mongoose";
import connect from "../../../database/connect";
import Questions from "../../../models/questions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {post_id,todo} = req.body;
    if(todo==="view"){
      const questions = await Questions.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { views: 1 } }
      );
      if (questions) {
        res.status(200).json({ message: "View updated"});
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    else if(todo==="answer"){
      const questions = await Questions.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { answers: 1 } }
      );
      if (questions) {
        res.status(200).json({ message: "View updated"});
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    else if(todo==="upvote"){
      const questions = await Questions.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { vote: 1 } }
      );
      if (questions) {
        res.status(200).json({ message: "Vote updated"});
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    else if(todo==="downvote"){
      const questions = await Questions.findOneAndUpdate(
        { post_id: post_id },
        { $inc: { vote: -1 } }
      );
      if (questions) {
        res.status(200).json({ message: "Vote updated"});
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
  }
}
