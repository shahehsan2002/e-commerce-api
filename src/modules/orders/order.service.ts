import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create a New Product
const createOrder = async (orderData: Order): Promise<Order> => {
    const result = await OrderModel.create(orderData);
    return result;
  };


  export const OrderService = {
    createOrder,
    // getAllOrders,
    // getOrdersByEmail,
  };