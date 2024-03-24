import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./database/Error/error.js";

import reservationRoute from "./routes/reservationRoute.js"



const app = express();
dotenv.config({path: "./config/config.env"});


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


dbConnection();
app.use(errorMiddleware)
app.use("/reservation" , reservationRoute);


export default app;