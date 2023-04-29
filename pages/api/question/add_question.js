import mongoose from "mongoose";
import connect from "../../../database/connect";
import Questions from "../../../models/questions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const newQuestion = new Questions(req.body);
    await newQuestion.save();
    const questions = await Questions.find();
    if (questions) {
      res.status(200).json({message: "Question added successfully"});
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
