import express from "express";

export const userRouter = express.Router();

userRouter.get("/",(req,res) => res.send('user index'));
userRouter.get("/user",(req,res) => res.send("get user"));
userRouter.get("/password", (req,res) => res.send("get password"));
