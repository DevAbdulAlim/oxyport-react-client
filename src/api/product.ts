import { useQuery, useMutation, QueryFunctionContext } from "react-query";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../lib/types";

interface ApiResponse {
  success: boolean;
  products: ProductType[];
  totalItems: number;
}

// Fetch all products
export function useProducts(params?: any) {
  return useQuery<ApiResponse, Error>(["products", params], async () => {
    const response = await axios.get<ApiResponse>("/api/products", {
      params: params,
    });
    return response.data;
  });
}

export function useProductById(productId: number) {
  return useQuery<ProductType, Error>(["product", productId], async () => {
    const response = await axios.get<{
      success: Boolean;
      product: ProductType;
    }>(`/api/products/${productId}`);
    if (!response.data.success) {
      throw new Error("Failed to fetch product");
    }
    return response.data.product;
  });
}

// Create a new product
export function useCreateProduct() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<ProductType>>(
    (productData) => axios.post<void>("/api/products", productData)
  );
}

// Update an existing product
export function useUpdateProduct() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<ProductType>>(
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
