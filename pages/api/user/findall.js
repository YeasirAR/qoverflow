import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "POST") {

    const {search,sortby} = req.body;
    await connect.connect();
    let users;
    if(sortby==="name"){
      users = await Users.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { username: { $regex: search, $options: "i" } }
        ]
      }).sort({ name: 1 });
    }
    else if(sortby==="reputation"){
      users = await Users.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { username: { $regex: search, $options: "i" } }
        ]
      }).sort({ reputation: -1 });
    }
    else{
      users = await Users.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { username: { $regex: search, $options: "i" } }
        ]
      });
    }
    if (users) {
      res.status(200).json(sortby==="new"?users.reverse():users);
    } else {
      res.status(409).json({ message: "Something Went Wrong"});
    }
  }
}
