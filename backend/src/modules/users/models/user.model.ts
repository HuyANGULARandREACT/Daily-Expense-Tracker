import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  phoneNumber: number;
  balance: number;
  monthlyBudget: number;
  password: string;
  createdAt: Date;
}
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    balance: { type: Number },
    monthlyBudget: { type: Number },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model<IUser>("User", userSchema);
