import { Response, Request } from "express";
import * as categoryService from "../services/category.service";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", err });
  }
};
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
  } catch (err) {
    res.status(500).json({ message: "Error creating category", err });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: "Error creating category", err });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await categoryService.updateCategory(id, req.body);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: "Error updating category", err });
  }
};
export const deleteCategory = async (req:Request, res:Response)=>{
  try{
    const {id} = req.params
    const category = await categoryService.deleteCategory(id)
    if(!category) return res.status(404).json({message:"category not found"})
      res.status(200).json(category)
  }catch(err){
    res.status(500).json({message: "error deleting category",err})
  }
}