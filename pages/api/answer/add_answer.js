import mongoose from "mongoose";
import connect from "../../../database/connect";
import Answers from "../../../models/answers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const newAnswer = new Answers(req.body);
    await newAnswer.save();
    const answers = await Answers.find();
    if (answers) {
      res.status(200).json({message: "Question added successfully"});
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
