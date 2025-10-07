import mongoose from "mongoose";

export interface ICategory {
  _id: mongoose.Types.ObjectId;
  _userId: mongoose.Types.ObjectId;
  name: string;
  createdAt: string;
}
