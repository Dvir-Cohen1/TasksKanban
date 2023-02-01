import express from "express";
import * as authController from "../controllers/authentication.controller.js";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.delete("/logout", authController.logout);
router.post("/isLogin", authController.isLogin);

export default router;
