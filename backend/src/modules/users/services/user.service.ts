import mongoose from "mongoose";
import { IUser, User } from "../models/user.model";

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find().sort({ createdAt: -1 });
};
export const updateUser = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};
export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findOneAndDelete(new mongoose.Types.ObjectId(id));
};
