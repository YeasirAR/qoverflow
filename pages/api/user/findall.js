import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await connect.connect();
    const Users = await Users.find();
    if (Users) {
      res.status(200).json(Users);
    } else {
      res.status(409).json({ message: "Invalid username"});
    }
  }
}
