import { useQuery, useMutation } from "react-query";
import axios, { AxiosResponse } from "axios";
import config from "../config/config";
import { CategoryType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  categories: CategoryType[];
  totalItems: number;
}

// Fetch all categories
export function useCategories(params?: any) {
  return useQuery<ApiResponse, Error>(["categories", params], async () => {
    const response = await axios.get<ApiResponse>(
      `${config.apiBaseUrl}/categories`,
      {
        params: params,
      }
    );
    return response.data;
  });
}

// Fetch a single category by ID
export function useCategoryById(categoryId: string) {
  return useQuery<CategoryType, Error>(["category", categoryId], async () => {
    const response = await axios.get<{ category: CategoryType }>(
      `/api/categories/${categoryId}`
    );
    return response.data.category;
  });
}

// Create a new category
export function useCreateCategory() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<CategoryType>>(
    (categoryData) => axios.post<void>("/api/categories", categoryData)
  );
}

// Update an existing category
export function useUpdateCategory() {
  return useMutation<AxiosResponse<void, any>, unknown, Partial<CategoryType>>(
    (categoryData) => {
      const { id, ...rest } = categoryData;
      return axios.put<void>(`/api/categories/${id}`, rest);
    }
  );
}

// Delete a category
export function useDeleteCategory() {
  return useMutation<AxiosResponse<void, any>, unknown, number>((categoryId) =>
    axios.delete<void>(`/api/categories/${categoryId}`)
  );
}
