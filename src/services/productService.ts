import axios from "axios";
import { Product, ProductFormValues } from "../lib/types";
import config from "../config";

const productService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get(`${config.apiBaseUrl}/products`);
      return response.data.products;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  },

  getProductDetails: async (productId: string): Promise<Product> => {
    try {
      const response = await axios.get(
        `${config.apiBaseUrl}/products/${productId}`
      );
      return response.data.product;
    } catch (error) {
      throw new Error("Failed to fetch product");
    }
  },

  createProduct: async (productData: ProductFormValues): Promise<Product> => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/products`,
        productData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  },

  updateProduct: async (
    productId: number,
    productData: Product
  ): Promise<Product> => {
    try {
      const response = await axios.put(
        `${config.apiBaseUrl}/products/${productId}`,
        productData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update product");
    }
  },

  deleteProduct: async (productId: number): Promise<void> => {
    try {
      await axios.delete(`${config.apiBaseUrl}/products/${productId}`);
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  },
};

export default productService;
