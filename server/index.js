import express from "express"
import mongoose from "mongoose"
import passport from "passport";
import cookieSession from "cookie-session";

import { keys } from "./config/keys.js";

import "./models/User.js"
mongoose.connect(keys.mongoURI);

import { router as authRouter } from "./routes/authRoutes.js"

const app = express()

app.use(express.json({extended: true}))

app.use(
  cookieSession({
    maxAge: 3 * 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000


app.use("/", authRouter)

app.get("/", (req,res) => {
  res.json({status: "running"})
})

app.listen(PORT)