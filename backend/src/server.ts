import express from "express";
import cors from "cors";
import connectDB from "./configs/db";
import router from "./modules/users/routes/user.route";

const app = express();
const apiRouter = express.Router();

//middleware
app.use(cors());
app.use(express.json());
//routes
apiRouter.use("/auth", router);
app.use("/api/v1", apiRouter);

//coonectDB
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
