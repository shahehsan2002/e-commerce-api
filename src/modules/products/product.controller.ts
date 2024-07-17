import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Create a New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);

    res.json({
      success: true,
      message: "Product is created successfully !!",
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not create product",
      error: errorMessage,
    });
  }
};

// Retrieve a List of All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    res.status(200).json({
      success: true,
      message: "Products are fetched successfully",
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not fetch Products",
      error: errorMessage,
    });
  }
};

// Search by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not fetch Product",
      error: errorMessage,
    });
  }
};

// Update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await ProductServices.updateProduct(productId, productData);

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not update product",
      error: errorMessage,
    });
  }
};

// Delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not delete product",
      error: errorMessage,
    });
  }
};

// Search Products
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.searchProducts(searchTerm as string);

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: "Could not search products",
      error: errorMessage,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
