import express from "express";
import morgan from "morgan";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router"
const app = express()


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

const home = (req,res) => res.send("Hello");
app.get("/",home);
app.use("/profile",userRouter)

export default app;
