import express from "express";
import { expenseController } from "../controllers/expense.controller";

const router = express.Router();

/**
 * @swagger
 * /expense/{userId}:
 *   get:
 *     tags:
 *       - Expense
 *     summary: Get all expenses for a user
 *     description: Retrieve all expenses for a specific user
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expense'
 *       401:
 *         description: Unauthorized
 */
router.get("/:userId", expenseController.getAllExpenses);

/**
 * @swagger
 * /expense/detail/{id}:
 *   get:
 *     tags:
 *       - Expense
 *     summary: Get expense by ID
 *     description: Retrieve a specific expense by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Expense ID
 *     responses:
 *       200:
 *         description: Expense found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       404:
 *         description: Expense not found
 */
router.get("/detail/:id", expenseController.getExpenseById);

/**
 * @swagger
 * /expense:
 *   post:
 *     tags:
 *       - Expense
 *     summary: Create a new expense
 *     description: Create a new expense record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - description
 *               - category
 *               - userId
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 50.00
 *               description:
 *                 type: string
 *                 example: Lunch at restaurant
 *               category:
 *                 type: string
 *                 example: 60f7b3b3b3b3b3b3b3b3b3b3
 *               userId:
 *                 type: string
 *                 example: 60f7b3b3b3b3b3b3b3b3b3b3
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-10-12T10:30:00Z
 *     responses:
 *       201:
 *         description: Expense created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       400:
 *         description: Bad request
 */
router.post("/", expenseController.createExpense);

/**
 * @swagger
 * /expense/{id}:
 *   put:
 *     tags:
 *       - Expense
 *     summary: Update expense
 *     description: Update an existing expense
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Expense ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 50.00
 *               description:
 *                 type: string
 *                 example: Lunch at restaurant
 *               category:
 *                 type: string
 *                 example: 60f7b3b3b3b3b3b3b3b3b3b3
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-10-12T10:30:00Z
 *     responses:
 *       200:
 *         description: Expense updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       404:
 *         description: Expense not found
 */
router.put("/:id", expenseController.updateExpense);

/**
 * @swagger
 * /expense/{id}:
 *   delete:
 *     tags:
 *       - Expense
 *     summary: Delete expense
 *     description: Delete an existing expense
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Expense ID
 *     responses:
 *       200:
 *         description: Expense deleted successfully
 *       404:
 *         description: Expense not found
 */
router.delete("/:id", expenseController.deleteExpense);

export default router;
