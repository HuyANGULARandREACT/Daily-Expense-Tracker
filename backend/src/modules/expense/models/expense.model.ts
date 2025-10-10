import mongoose, { Schema } from "mongoose";

export interface IExpense {
  userId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  title: string;
  amount: number;
  note: string;
}
const expenseSchema = new Schema<IExpense>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryId",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    note: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Expense = mongoose.model<IExpense>("Expense", expenseSchema);
