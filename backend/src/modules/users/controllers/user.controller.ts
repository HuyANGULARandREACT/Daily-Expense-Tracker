import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import generateToken from "../../../utils/generateToken";
import * as userService from "../services/user.service";
//----------------------------auth controller--------------------------------
export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { username, email, phoneNumber, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "email already exists" });
    }
    user = new User({ username, email, phoneNumber, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.monthlyBudget = 0;
    user.balance = 0;
    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      message: "Register succesfully",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error at resigter");
  }
};
export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email doesnt exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = generateToken(user);
    res.status(200).json({
      message: "login success",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error at login");
  }
};
export const handleChangePassword = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user doesnot exist" });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "password is not match" });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    res.json({ message: "Đổi mật khẩu thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

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
