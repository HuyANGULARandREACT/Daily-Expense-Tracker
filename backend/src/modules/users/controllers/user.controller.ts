import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import generateToken from "../../../utils/generateToken";
import * as userService from "../services/user.service";

export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", err });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUser(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", err });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "error deleting user", err });
  }
};
