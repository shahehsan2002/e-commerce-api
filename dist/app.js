"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/products/product.route");
const order_route_1 = require("./modules/orders/order.route");
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
// Routes
app.use("/api/products", product_route_1.ProductRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
