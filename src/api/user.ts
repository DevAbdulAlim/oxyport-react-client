import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import config from "../config/config";
import type { UserType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  users: UserType[];
  totalItems: number;
}

// Fetch all users
export function useUsers(params?: Record<string, unknown>) {
  return useQuery<ApiResponse, AxiosError>({
    queryKey: ["users", params],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>(
        `${config.apiBaseUrl}/users`,
        { params }
      );
      return response.data;
    },
  });
}

// Fetch a single user by ID
export function useUserById(userId: string) {
  return useQuery<UserType, AxiosError>({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await axios.get<{ user: UserType }>(
        `${config.apiBaseUrl}/users/${userId}`
      );
      return response.data.user;
    },
  });
}

// Create a new user
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<UserType, AxiosError, Partial<UserType>>({
    mutationFn: async (userData) => {
      const response = await axios.post<UserType>(
        `${config.apiBaseUrl}/users`,
        userData
      );
      return response.data;
    },
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.setQueryData(["user", newUser.id], newUser);
    },
  });
}

// Update an existing user
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<UserType, AxiosError, Partial<UserType>>({
    mutationFn: async (userData) => {
      const { id, ...rest } = userData;
      const response = await axios.put<UserType>(
        `${config.apiBaseUrl}/users/${id}`,
        rest
      );
      return response.data;
    },
    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.setQueryData(["user", updatedUser.id], updatedUser);
    },
  });
}

// Delete a user
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>({
    mutationFn: async (userId) => {
      await axios.delete<void>(`${config.apiBaseUrl}/users/${userId}`);
    },
    onSuccess: (_, deletedUserId) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.removeQueries({ queryKey: ["user", deletedUserId] });
    },
  });
}
