"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
// Create a New Product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductServices.createProduct(productData);
        res.json({
            success: true,
            message: "Product is created successfully !!",
            data: result,
        });
    }
    catch (err) {
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
});
// Retrieve a List of All Products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products are fetched successfully",
            data: result,
        });
    }
    catch (err) {
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
});
// Search by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: result,
        });
    }
    catch (err) {
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
});
// Update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_service_1.ProductServices.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
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
});
// Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.ProductServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
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
});
// Search Products
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.searchProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
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
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
};
