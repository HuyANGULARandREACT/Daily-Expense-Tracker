import mongoose from "mongoose";

export interface IExpense {
  _id: mongoose.Types.ObjectId;
  _userId: string;
  title: string;
  amount: number;
  categoryId: string;
  date: Date;
  note: string;
  createdAt: string;
}
