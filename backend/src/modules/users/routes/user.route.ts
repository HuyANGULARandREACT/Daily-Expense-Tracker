import express from "express";
import {
  getUserById,
  handleChangePassword,
  loginUser,
  registerUser,
} from "../controllers/user.controller";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/changePassword", handleChangePassword);
router.get("/:id", getUserById);
export default router;
