import authRoutes from "./authentication.routes.js";
import express from "express";
import { NotFoundError } from "../errors/Errors.js";
import { authJwtToken } from "../middlewares/authentication.middleware.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("server running");
});
router.use("/auth", authRoutes);
router.all("*", (req, res, next) => next(new NotFoundError()));

export default router;
