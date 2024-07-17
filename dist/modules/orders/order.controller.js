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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
// Create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderService.createOrder(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
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
            message: "Could not create order",
            error: errorMessage,
        });
    }
});
// Get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_service_1.OrderService.getAllOrders();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders,
        });
    }
    catch (err) {
        let errorMessage = "An unknown error occurred";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).json({
            success: false,
            message: 'Could not fetch orders',
            error: errorMessage,
        });
    }
});
// Get order by email
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email parameter is required',
            });
        }
        const orders = yield order_service_1.OrderService.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: `Orders fetched successfully for user email: ${email}`,
            data: orders,
        });
    }
    catch (err) {
        let errorMessage = "An unknown error occurred";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).json({
            success: false,
            message: 'Could not fetch orders by email',
            error: errorMessage,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
