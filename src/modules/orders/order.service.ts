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


  export const OrderService = {
    createOrder,
    getAllOrders,
    // getOrdersByEmail,
  };