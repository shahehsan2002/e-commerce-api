import { Request, Response } from "express";
import { OrderService } from "./order.service";

// Create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrder(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: unknown) {
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
};

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
  } catch (err: unknown) {
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
};

// Get order by email
const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email parameter is required',
      });
    }

    const orders = await OrderService.getOrdersByEmail(email);

    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for user email: ${email}`,
      data: orders,
    });
  } catch (err: unknown) {
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
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
