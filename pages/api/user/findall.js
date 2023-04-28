import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await connect.connect();
    const users = await Users.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(409).json({ message: "Invalid username"});
    }
  }
}
