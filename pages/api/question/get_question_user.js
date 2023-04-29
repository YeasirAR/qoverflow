import mongoose from "mongoose";
import connect from "../../../database/connect";
import Questions from "../../../models/questions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {username} = req.body;
    const questions = await Questions.find({authorUsername: username});
    if (questions) {
      res.status(200).json(questions.reverse());
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
