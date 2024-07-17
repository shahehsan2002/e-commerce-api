import { Request, Response } from "express";
import { OrderService } from "./order.service";

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrder(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not create order",
      error: err.message,
    });
  }
};


// Get All orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch orders',
      error: err.message,
    });
  }
};


export const OrderController = {
  createOrder,
  getAllOrders,
  // getOrdersByEmail,
};
