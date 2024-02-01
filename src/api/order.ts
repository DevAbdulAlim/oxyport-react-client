import { useQuery, useMutation, MutationFunction } from "react-query";
import axios, { AxiosResponse } from "axios";
import config from "../config/config";
import { OrderType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  orders: OrderType[];
  totalItems: number;
}

// Fetch all orders
export function useOrders(params?: any) {
  return useQuery<ApiResponse, Error>(["orders", params], async () => {
    const response = await axios.get<ApiResponse>(
      `${config.apiBaseUrl}/orders`,
      {
        params: params,
      }
    );
    return response.data;
  });
}

// Fetch a single order by ID
export function useOrderById(orderId: string) {
  return useQuery<OrderType, Error>(["order", orderId], async () => {
    const response = await axios.get<{ order: OrderType }>(
      `${config.apiBaseUrl}/orders/${orderId}`
    );
    return response.data.order;
  });
}

export const useCreateOrder = () => {
  return useMutation(
    async (orderData: Partial<OrderType>) =>
      await axios.post<void>(`${config.apiBaseUrl}/orders`, orderData)
  );
};

// export function useUpdateOrder() {
//   return useMutation<void, unknown, Partial<OrderType>>(
//     (orderData) => {
//       const { id, ...rest } = orderData;
//       return axios.put<void>(`${config.apiBaseUrl}/orders/${id}`, rest);
//     }
//   );
// }

// // Delete an order
// export function useDeleteOrder() {
//   return useMutation<void, unknown, string>((orderId) =>
//     axios.delete<void>(`${config.apiBaseUrl}/orders/${orderId}`)
//   );
// }
