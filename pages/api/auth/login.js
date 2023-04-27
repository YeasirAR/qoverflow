import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {email, password} = req.body;
    const existingUser = await Users.findOne({email:email , password:password});
    if (existingUser) {
      res.status(200).json(existingUser);
    } else {
      res.status(409).json({ message: "Invalid username or password"});
    }
  }
}
