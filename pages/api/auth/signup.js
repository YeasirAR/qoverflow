import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { name, email, username, password } = req.body;
        const existingUser = await Users.findOne({
            $or: [{ email }, { username }],
          });
      
          if (existingUser) {
            return res
              .status(409)
              .json({ message: "An account with this email or username already exists" });
          }
        const newUser = new Users({
            name,
            email,
            username,
            password,
        });
        await newUser.save();
        res.status(200).json("Account created successfully");
    }
}
