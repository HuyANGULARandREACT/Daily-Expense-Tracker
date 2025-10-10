import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
  categoryImamge: string;
}
const categorySchema = new Schema<ICategory>(
  {
    categoryName: { type: String, required: true },
    categoryImamge: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Category = mongoose.model<ICategory>("Category", categorySchema);
