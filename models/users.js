import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title : { type: String ,default:"" },
  location: { type: String ,default:"" },
  imageUrl: { type: String ,default:"/images/default.jpg" },
  bio: { type: String ,default:"" },
  reputaion: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  facebook: { type: String ,default:"" },
  twitter: { type: String ,default:"" },
  github: { type: String ,default:"" },
});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;
