import mongoose from "mongoose";
import connect from "../../../database/connect";
import Answers from "../../../models/answers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {username} = req.body;
    const answers = await Answers.find({authorUsername: username});
    if (answers) {
      res.status(200).json(answers);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
