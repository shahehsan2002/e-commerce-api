import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a New Product
const createProduct = async (payload:TProduct) => {
    const result= await Product.create(payload);
    return result ;
}

// Retrieve a List of All Products
const getAllProducts = async () =>{
    const result = await Product.find()
    return result;
}

export const ProductServices = {
    createProduct,
    getAllProducts,
}