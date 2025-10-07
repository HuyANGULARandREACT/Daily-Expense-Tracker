import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = "your_jwt_secret_key_here"; // Replace with your actual secret key

const config = {
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/DailyExpenseTracker",
  JWT_SECRET: process.env.JWT_SECRET || JWT_SECRET,
  PORT: process.env.PORT || 4000,
};

export default config;
