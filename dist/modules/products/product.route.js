"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// create a new product
router.post("/", product_controller_1.ProductControllers.createProduct);
// get all products
router.get("/", product_controller_1.ProductControllers.getAllProducts);
// get product by id
router.get("/:productId", product_controller_1.ProductControllers.
    getProductById);
// Update product by id
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
// Delete Product by id
router.delete("/:productId", product_controller_1.ProductControllers.deleteProduct);
// Search Products
router.get("/", product_controller_1.ProductControllers.searchProducts);
exports.ProductRoutes = router;
