import mongoose from "mongoose";
import { Category, ICategory } from "../models/category.model";

export const getAllCategories = async (): Promise<ICategory[]> => {
  return await Category.find().sort({ createdAt: -1 });
};
export const getCategoryById = async (
  id: string
): Promise<ICategory | null> => {
  return await Category.findById(id);
};
export const createCategory = async (data: ICategory): Promise<ICategory> => {
  const newCategory = new Category(data);
  return await newCategory.save();
};
export const updateCategory = async (
  id: string,
  data: Partial<ICategory>
): Promise<ICategory | null> => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};
export const deleteCategory = async (id: string): Promise<ICategory | null> => {
  return await Category.findOneAndDelete(new mongoose.Types.ObjectId(id));
};
