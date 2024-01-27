import axios, { AxiosResponse } from "axios";
import config from "../config";

const baseURL = config.apiBaseUrl;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface SearchParams {
  sortBy?: string;
  sortOrder?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

// CRUD operations for Categories
export const categoryService = {
  getCategories: (params?: SearchParams): Promise<AxiosResponse<any>> => {
    return api.get("/categories", { params });
  },
  getCategoryDetails: (categoryId: number): Promise<AxiosResponse<any>> => {
    return api.get(`/categories/${categoryId}`);
  },
  addCategory: (categoryData: any): Promise<AxiosResponse<any>> => {
    return api.post("/categories", categoryData);
  },
  updateCategory: (
    categoryId: number,
    categoryData: any
  ): Promise<AxiosResponse<any>> => {
    return api.put(`/categories/${categoryId}`, categoryData);
  },
  deleteCategory: (categoryId: number): Promise<AxiosResponse<any>> => {
    return api.delete(`/categories/${categoryId}`);
  },
};

// CRUD operations for Products
export const productService = {
  getProducts: (params?: SearchParams): Promise<AxiosResponse<any>> => {
    return api.get("/products", { params });
  },
  getProductDetails: (productId: number): Promise<AxiosResponse<any>> => {
    return api.get(`/products/${productId}`);
  },
  addProduct: (productData: any): Promise<AxiosResponse<any>> => {
    return api.post("/products", productData);
  },
  updateProduct: (
    productId: number,
    productData: any
  ): Promise<AxiosResponse<any>> => {
    return api.put(`/products/${productId}`, productData);
  },
  deleteProduct: (productId: number): Promise<AxiosResponse<any>> => {
    return api.delete(`/products/${productId}`);
  },
};

// CRUD operations for Orders
export const orderService = {
  getOrders: (params?: SearchParams): Promise<AxiosResponse<any>> => {
    return api.get("/orders", { params });
  },
  getOrderDetails: (orderId: number): Promise<AxiosResponse<any>> => {
    return api.get(`/orders/${orderId}`);
  },
  addOrder: (orderData: any): Promise<AxiosResponse<any>> => {
    return api.post("/orders", orderData);
  },
  updateOrder: (
    orderId: number,
    orderData: any
  ): Promise<AxiosResponse<any>> => {
    return api.put(`/orders/${orderId}`, orderData);
  },
  deleteOrder: (orderId: number): Promise<AxiosResponse<any>> => {
    return api.delete(`/orders/${orderId}`);
  },
};

// CRUD operations for Users
export const userService = {
  getUsers: (params?: SearchParams): Promise<AxiosResponse<any>> => {
    return api.get("/users", { params });
  },
  getUserDetails: (userId: number): Promise<AxiosResponse<any>> => {
    return api.get(`/users/${userId}`);
  },
  addUser: (userData: any): Promise<AxiosResponse<any>> => {
    return api.post("/users", userData);
  },
  updateUser: (userId: number, userData: any): Promise<AxiosResponse<any>> => {
    return api.put(`/users/${userId}`, userData);
  },
  deleteUser: (userId: number): Promise<AxiosResponse<any>> => {
    return api.delete(`/users/${userId}`);
  },
};
