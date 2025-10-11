import { Request, Response } from "express";
import { expenseService } from "../services/expense.service";

export const expenseController = {
  async getAllExpenses(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const expenses = await expenseService.getAllExpenses(userId);
      res.status(200).json(expenses);
    } catch (err) {
      res.status(500).json({ message: "server error", err });
    }
  },
  async getExpenseById(req:Request, res:Response){
    try{
        const {id} = req.params
        const expense = await expenseService.getExpenseById(id)
        if(!expense) {
            return res.status(404).json({message: "expense not found"})
        }
        res.status(200).json(expense)
    }catch(err){
        res.status(500).json({message: "server error", err})
    }
  },
  async createExpense(req: Request, res: Response) {
    try {
      const newExpense = await expenseService.createExpense(req.body);
      res.status(201).json(newExpense);
    } catch (err) {
      res.status(500).json({ message: "server err", err });
    }
  },
  async updateExpense(req: Request, res: Response){
    try{
        const {id} = req.params
        const updated = await expenseService.updateExpense(id, req.body)
        res.status(200).json(updated)
    }catch(err){
        res.status(500).json({message:"server err", err})
    }
  },
  async deleteExpense(req: Request, res: Response){
    try{
        const {id} = req.params
        await expenseService.deleteExpense(id)
        res.status(200).json({message:"expense deleted"})
    }catch(err){
        res.status(500).json({message:"server err", err})
    }
  },

};
