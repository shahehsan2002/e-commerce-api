import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create a New Product
const createOrder = async (orderData: Order): Promise<Order> => {
    const result = await OrderModel.create(orderData);
    return result;
  };

  // Get All Services 
  const getAllOrders = async (): Promise<Order[]> => {
    const result = await OrderModel.find();
    return result;
  };

  // Get All orders by email
  const getOrdersByEmail = async (email: string): Promise<Order[]> => {
    const result = await OrderModel.find({ email });
    return result;
  };


  export const OrderService = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
  };