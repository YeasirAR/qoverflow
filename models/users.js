import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageUrl: { type: String },
  bio: { type: String },
  reputaion: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;
