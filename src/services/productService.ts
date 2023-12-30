import axios from 'axios';
import { Product } from '../models/Product';

const API_BASE_URL = 'http://localhost:5000/api'; 

const productService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  },

  createProduct: async (productData: Product): Promise<Product> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/products`, productData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create product');
    }
  },

  updateProduct: async (productId: number, productData: Product): Promise<Product> => {
    try {
      const response = await axios.put(`${API_BASE_URL}/products/${productId}`, productData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update product');
    }
  },

  deleteProduct: async (productId: number): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/products/${productId}`);
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  },
};

export default productService;
