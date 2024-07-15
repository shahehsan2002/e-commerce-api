import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();


// create a new product
router.post("/", ProductControllers.createProduct);

// get all products
router.get("/", ProductControllers.getAllProducts);

// get product by id
router.get("/:productId", ProductControllers.
getProductById);

// Update product by id
router.put("/:productId", ProductControllers.updateProduct);

// Delete Product by id
router.delete("/:productId",ProductControllers.deleteProduct)

export const ProductRoutes = router;
