import mongoose from "mongoose";
import connect from "../../../database/connect";
import Questions from "../../../models/questions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {search} = req.body;
    const questions = await Questions.find({
      $or: [
        { author: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
        { body: { $regex: search, $options: "i" } }
      ]
    });
    if (questions) {
      res.status(200).json(questions.reverse());
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
