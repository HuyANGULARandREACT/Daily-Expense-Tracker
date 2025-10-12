import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import connectDB from "./configs/db";
import swaggerSpec from "./configs/swagger";
import authRoutes from "./modules/users/routes/user.route";
import categoryRoutes from "./modules/category/routes/category.route";
import expenseRoutes from "./modules/expense/routes/expense.route";
const app = express();
const apiRouter = express.Router();

//middleware
app.use(cors());
app.use(express.json());

//swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
apiRouter.use("/auth", authRoutes);
apiRouter.use("/expense", expenseRoutes);
apiRouter.use("/category", categoryRoutes);
app.use("/api/v1", apiRouter);
//coonectDB
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(
    `📚 Swagger documentation available at http://localhost:${PORT}/api-docs`
  );
});
