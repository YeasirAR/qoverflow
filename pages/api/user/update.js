import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const {name, email,username, password,imageUrl,github,twitter,facebook,bio,title,location } = req.body;
        // ..complete the code, find user by username and update the user
        try {
            const filter = { username: req.body.username };
            const update = {
              name: req.body.name,
              email: req.body.email,
              username: req.body.username,
              password: req.body.password,
              imageUrl: req.body.imageUrl,
              github: req.body.github,
              twitter: req.body.twitter,
              facebook: req.body.facebook,
              bio: req.body.bio,
              title: req.body.title,
              location: req.body.location,
            };
            const user = await Users.findOneAndUpdate(filter, update, {
              new: true,
              runValidators: true,
            });
            if (!user) {
              return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json({ message: "User updated successfully", user:user });
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Something went wrong" });
          }          
    }
}
