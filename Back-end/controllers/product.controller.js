import Product from '../models/product.model.js';
import mongoose from "mongoose";


export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ success: false, message: "Get all products failed" });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; //user will send this data
  
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "please provide all fields" });
    }
  
    const newProduct = new Product(product);
  
    try {
      await newProduct.save();
      res.status(200).json({ success: true, data: newProduct });
    } catch (error) {
      console.log(error.message, "Create product failed");
      return res
        .status(500)
        .json({ success: false, message: "Create product failed" });
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product id!" });
    }
  
    try {
      const product = await Product.findByIdAndUpdate(id, newProduct, {new: true,});
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: "Failed to update product" });
  }
}

export const deleteOne = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({
        success: false,
        message: "Product delete failed, product not found?",
      });
    }
  }