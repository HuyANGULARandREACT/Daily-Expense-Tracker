import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
  categoryType: "income" | "outcome";
  color: string;
  userId: mongoose.Schema.Types.ObjectId;
}

const categorySchema = new Schema<ICategory>(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    categoryType: {
      type: String,
      required: true,
      enum: ["income", "outcome"],
    },
    color: {
      type: String,
      default: "#2196f3", // dùng để hiển thị màu trong biểu đồ
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
