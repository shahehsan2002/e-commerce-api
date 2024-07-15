import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a New Product
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// Retrieve a List of All Products
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

// Search by ID
const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update product
const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Delete Product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};




// Search Products by Term
const searchProducts = async (term: string) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: term, $options: "i" } },
      { description: { $regex: term, $options: "i" } },
      { category: { $regex: term, $options: "i" } },
      { tags: { $regex: term, $options: "i" } },
    ],
  });
  return result;
};


export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
