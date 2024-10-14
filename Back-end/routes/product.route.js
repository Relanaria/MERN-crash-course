import express from 'express';

import { getAllProducts, createProduct, updateProductById, deleteOne } from '../controllers/product.controller.js'

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProductById)
router.delete("/:id", deleteOne);
  

export default router;