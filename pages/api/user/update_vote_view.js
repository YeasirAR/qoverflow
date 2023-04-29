import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
    if (req.method === "POST") {
      await connect.connect();
      const {username,todo} = req.body;
      if(todo==="view"){
        const user = await Users.findOneAndUpdate(
          { username: username },
          { $inc: { views: 1 } }
        );
        if (user) {
          res.status(200).json({ message: "Updated"});
        } else {
          res.status(409).json({ message: "Something went wrong"});
        }
      }
      else if(todo==="question"){
        const user = await Users.findOneAndUpdate(
          { username: username },
          { $inc: { questionCount: 1 } }
        );
        if (user) {
          res.status(200).json({ message: "Updated"});
        } else {
          res.status(409).json({ message: "Something went wrong"});
        }
      }
      else if(todo==="answer"){
        const user = await Users.findOneAndUpdate(
          { username: username },
          { $inc: { answerCount: 1 } }
        );
        if (user) {
          res.status(200).json({ message: "Updated"});
        } else {
          res.status(409).json({ message: "Something went wrong"});
        }
      }
      else if(todo==="upvote"){
        const user = await Users.findOneAndUpdate(
          { username: username },
          { $inc: { reputation: 1 } }
        );
        if (user) {
          res.status(200).json({ message: "Updated"});
        } else {
          res.status(409).json({ message: "Something went wrong"});
        }
      }
      else if(todo==="downvote"){
        const user = await Users.findOneAndUpdate(
          { username: username },
          { $inc: { reputation: -1 } }
        );
        if (user) {
          res.status(200).json({ message: "Updated"});
        } else {
          res.status(409).json({ message: "Something went wrong"});
        }
      }
    }
  }
  