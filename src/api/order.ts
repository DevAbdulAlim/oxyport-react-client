import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import config from "../config/config";
import type { OrderType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  orders: OrderType[];
  totalItems: number;
}

// Fetch all orders
export function useOrders(params?: Record<string, unknown>) {
  return useQuery<ApiResponse, AxiosError>({
    queryKey: ["orders", params],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>(
        `${config.apiBaseUrl}/orders`,
        { params }
      );
      return response.data;
    },
  });
}

// Fetch a single order by ID
export function useOrderById(orderId: string) {
  return useQuery<OrderType, AxiosError>({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const response = await axios.get<{ order: OrderType }>(
        `${config.apiBaseUrl}/orders/${orderId}`
      );
      return response.data.order;
    },
  });
}

// Create a new order
export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation<OrderType, AxiosError, Partial<OrderType>>({
    mutationFn: async (orderData) => {
      const response = await axios.post<OrderType>(
        `${config.apiBaseUrl}/orders`,
        orderData
      );
      return response.data;
    },
    onSuccess: (newOrder) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.setQueryData(["order", newOrder.id], newOrder);
    },
  });
}

// Update an existing order
export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation<OrderType, AxiosError, Partial<OrderType>>({
    mutationFn: async (orderData) => {
      const { id, ...rest } = orderData;
      const response = await axios.put<OrderType>(
        `${config.apiBaseUrl}/orders/${id}`,
        rest
      );
      return response.data;
    },
    onSuccess: (updatedOrder) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.setQueryData(["order", updatedOrder.id], updatedOrder);
    },
  });
}

// Delete an order
export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>({
    mutationFn: async (orderId) => {
      await axios.delete<void>(`${config.apiBaseUrl}/orders/${orderId}`);
    },
    onSuccess: (_, deletedOrderId) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.removeQueries({ queryKey: ["order", deletedOrderId] });
    },
  });
}
