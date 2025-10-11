import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
  description?: string;
  userId?: mongoose.Schema.Types.ObjectId;
}

const categorySchema = new Schema<ICategory>(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
