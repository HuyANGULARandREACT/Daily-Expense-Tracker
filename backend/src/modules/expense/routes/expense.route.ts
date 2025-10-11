import express from "express";
import { expenseController } from "../controllers/expense.controller";

const router = express.Router();

router.get("/:userId", expenseController.getAllExpenses);
router.get("/detail/:id", expenseController.getExpenseById);
router.post("/", expenseController.createExpense);
router.put("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);

export default router;
