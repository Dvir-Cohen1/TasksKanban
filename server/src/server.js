import express from "express";
import routes from "../src/routes/index.js";
import errorHandler from "./errors/errorHandler.js";
import initialMongoConnection from "./config/DB.config.js";
import cors from "cors";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.use(errorHandler);

const API_SERVER_PORT = process.env.API_SERVER_PORT || 8002;
initialMongoConnection();
app.listen(
  API_SERVER_PORT,
  console.log(`Server running on Port: ${API_SERVER_PORT}`)
);
