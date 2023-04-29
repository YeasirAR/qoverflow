import mongoose from "mongoose";
import connect from "../../../database/connect";
import Answers from "../../../models/answers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {post_id} = req.body;
    const answers = await Answers.find({post_id: post_id});
    if (answers) {
      res.status(200).json(answers);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
