import { useQuery, useMutation, useQueryClient } from "react-query";
import axios, { AxiosResponse } from "axios";
import { ProductFormValues, ProductType } from "../lib/types";

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

export function useProductById(productId: string) {
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
  const queryClient = useQueryClient();

  return useMutation<void, unknown, Partial<ProductFormValues>>(
    async (productData) => {
      const response = await axios.post<void>("/api/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );
}

// Update an existing product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    unknown,
    { productId: string; productData: ProductFormValues }
  >(
    async ({ productId, productData }) => {
      await axios.put<void>(`/api/products/${productId}`, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );
};

// Delete a product
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, number>(
    async (productId) => {
      await axios.delete<void>(`/api/products/${productId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );
}
