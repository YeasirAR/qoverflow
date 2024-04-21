import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";
// import nodemailer from "nodemailer"
const nodemailer=require("nodemailer")



export default async function handler(req, res) {
  const mailersmtp="qhnq bsjx gpen zore"
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
        else{
          const newUser = new Users({
            name,
            email,
            username,
            password,
        });
        await newUser.save();
        
        res.status(200).json("Account created successfully");
        verifyMail(newUser.email,newUser.username,newUser._id)
        const verifyMail=async(email,username,userid)=>{
          try {
            const transporter = nodemailer.createTransport({
              service:"gmail",
              auth:{
                user:"eyamin.aman@gmail.com",
                pass:mailersmtp,
              }
          })
          const info = await transporter.sendMail({
            from: 'eyamin.aman@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Verification of Qoverflow", // Subject line
            html: "<b>Hi, Please click here to <a href='http://localhost:3000'>verify</a></b>", 
          }).then(
             await Users.updateOne({_id:userid},{$set:{verified:0}})
          )
        
          console.log("Message sent: ", info.messageId);
            
          }
           catch (error) {
            console.log(error.message)
          }
        }
        }
    }
}
