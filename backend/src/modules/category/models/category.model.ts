import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  categoryName: string;
  categoryImamge: string;
  createdAt: Date;
}
const categorySchema = new Schema<ICategory>(
  {
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    categoryName: { type: String, required: true },
    categoryImamge: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
export const Category = mongoose.model<ICategory>("Category", categorySchema);
