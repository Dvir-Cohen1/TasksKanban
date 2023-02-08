import authRoutes from "./authentication.routes.js";
import express from "express";
import { NotFoundError } from "../errors/Errors.js";
import errorHandler from "../errors/errorHandler.js";
import { authJwtToken } from "../middlewares/authentication.middleware.js";
import userRoutes from "./users.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", authJwtToken, userRoutes);
router.all("*", (req, res, next) => next(new NotFoundError()));
router.use(errorHandler);

export default router;
