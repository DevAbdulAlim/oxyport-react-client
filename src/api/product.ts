import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import type { ProductFormValues, ProductType } from "../lib/types";

interface ApiResponse {
  success: boolean;
  products: ProductType[];
  totalItems: number;
}

// Fetch all products
export function useProducts(params?: Record<string, unknown>) {
  return useQuery<ApiResponse, AxiosError>({
    queryKey: ["products", params],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>("/api/products", {
        params,
      });
      return response.data;
    },
  });
}

// Fetch a single product by ID
export function useProductById(productId: string) {
  return useQuery<ProductType, AxiosError>({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await axios.get<{
        success: boolean;
        product: ProductType;
      }>(`/api/products/${productId}`);
      if (!response.data.success) {
        throw new Error("Failed to fetch product");
      }
      return response.data.product;
    },
  });
}

// Create a new product
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation<ProductType, AxiosError, Partial<ProductFormValues>>({
    mutationFn: async (productData) => {
      const response = await axios.post<ProductType>(
        "/api/products",
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: (newProduct) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.setQueryData(["product", newProduct.id], newProduct);
    },
  });
}

// Update an existing product
export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation<
    ProductType,
    AxiosError,
    { productId: string; productData: ProductFormValues }
  >({
    mutationFn: async ({ productId, productData }) => {
      const response = await axios.put<ProductType>(
        `/api/products/${productId}`,
        productData
      );
      return response.data;
    },
    onSuccess: (updatedProduct) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.setQueryData(["product", updatedProduct.id], updatedProduct);
    },
  });
}

// Delete a product
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, number>({
    mutationFn: async (productId) => {
      await axios.delete<void>(`/api/products/${productId}`);
    },
    onSuccess: (_, deletedProductId) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.removeQueries({ queryKey: ["product", deletedProductId] });
    },
  });
}
