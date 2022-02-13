import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String
})

mongoose.model("users", userSchema)