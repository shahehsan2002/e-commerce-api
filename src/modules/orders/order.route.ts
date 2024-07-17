import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// Create a new order
router.post('/', OrderController.createOrder);

// Get all orders
router.get('/', OrderController.getAllOrders);

// Get orders by email
router.get('/email', OrderController.getOrdersByEmail);

export const OrderRoutes = router;
