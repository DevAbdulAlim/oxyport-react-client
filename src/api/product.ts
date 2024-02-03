import { useQuery, useMutation } from "react-query";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

// Fetch all products
export function useProducts() {
  return useQuery<Product[]>("products", async () => {
    const response = await axios.get<Product[]>("/api/products");
    return response.data;
  });
}

// Fetch a single product by ID
export function useProductById(productId: number) {
  return useQuery<AxiosResponse<Product, any>>(
    ["product", productId],
    async () => {
      const response = await axios.get<Product>(`/api/products/${productId}`);
      return response;
    }
  );
}

// Create a new product
export function useCreateProduct() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<Product>>(
    (productData) => axios.post<void>("/api/products", productData)
  );
}

// Update an existing product
export function useUpdateProduct() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<Product>>(
    (productData) => {
      const { id, ...rest } = productData;
      return axios.put<void>(`/api/products/${id}`, rest);
    }
  );
}

// Delete a product
export function useDeleteProduct() {
  return useMutation<AxiosResponse<void, any>, unknown, number>((productId) =>
    axios.delete<void>(`/api/products/${productId}`)
  );
}
