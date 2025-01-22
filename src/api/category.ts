import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import config from "../config/config";
import type { CategoryType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  categories: CategoryType[];
  totalItems: number;
}

// Fetch all categories
export function useCategories(params?: Record<string, unknown>) {
  return useQuery<ApiResponse, AxiosError>({
    queryKey: ["categories", params],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>(
        `${config.apiBaseUrl}/categories`,
        { params }
      );
      return response.data;
    },
  });
}

// Fetch a single category by ID
export function useCategoryById(categoryId: string) {
  return useQuery<CategoryType, AxiosError>({
    queryKey: ["category", categoryId],
    queryFn: async () => {
      const response = await axios.get<{ category: CategoryType }>(
        `/api/categories/${categoryId}`
      );
      return response.data.category;
    },
  });
}

// Create a new category
export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryData) => {
      const response = await axios.post<CategoryType>(
        "/api/categories",
        categoryData
      );
      return response.data;
    },
    onSuccess: (newCategory) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.setQueryData(["category", newCategory.id], newCategory);
    },
  });
}

// Update an existing category
export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation<CategoryType, AxiosError, Partial<CategoryType>>({
    mutationFn: async (categoryData) => {
      const { id, ...rest } = categoryData;
      const response = await axios.put<CategoryType>(
        `/api/categories/${id}`,
        rest
      );
      return response.data;
    },
    onSuccess: (updatedCategory) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.setQueryData(
        ["category", updatedCategory.id],
        updatedCategory
      );
    },
  });
}

// Delete a category
export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryId: number) => {
      await axios.delete(`/api/categories/${categoryId}`);
    },
    onSuccess: (_, deletedCategoryId) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.removeQueries({ queryKey: ["category", deletedCategoryId] });
    },
  });
}
