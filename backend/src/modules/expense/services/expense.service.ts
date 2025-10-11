import mongoose from "mongoose";
import { Expense, IExpense } from "../models/expense.model";
import { IUser, User } from "../../users/models/user.model";
export const expenseService = {
  async getAllExpenses(userId: string) {
    return await Expense.find({ userId }).populate("categoryId");
  },
  async getExpenseById(expenseId: string) {
    if (!mongoose.Types.ObjectId.isValid(expenseId)) return null;
    return await Expense.findById(expenseId).populate("categoryId");
  },
  async createExpense(data: {
    userId: string;
    categoryId: string;
    title: string;
    amount: number;
    note?: string;
    expenseType: "income" | "outcome";
  }) {
    const user = await User.findById(data.userId);
    if (!user) throw new Error("User not found");

    if (data.expenseType === "outcome") {
      if (user.balance < data.amount) {
        throw new Error("Insufficient balance");
      }
      user.balance -= data.amount;
    } else if (data.expenseType === "income") {
      user.balance += data.amount;
    }
    await user.save();
    const expense = await Expense.create(data);
    return expense;
  },
  async updateExpense(expenseId: string, data: Partial<any>) {
    return await Expense.findByIdAndUpdate(expenseId, data, { new: true });
  },
  async deleteExpense(expenseId: string) {
    return await Expense.findByIdAndDelete(expenseId);
  },
};
