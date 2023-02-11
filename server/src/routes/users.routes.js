import express from "express";
import * as usersController from "../controllers/user.contoller.js";
const router = express.Router();

router.get("/all", usersController.getAllUsers);
router.post("/delete", usersController.deleteUser);
router.post("/user", usersController.getUser);
router.post("/addUser", usersController.addUser);

export default router;
