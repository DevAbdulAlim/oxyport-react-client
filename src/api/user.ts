import { useQuery, useMutation } from "react-query";
import axios from "axios";
import config from "../config/config";
import { UserType } from "../lib/types";

// Define the interface for the API response
interface ApiResponse {
  success: boolean;
  users: UserType[];
  totalItems: number;
}

// Fetch all users
export function useUsers(params?: any) {
  return useQuery<ApiResponse, Error>(["users", params], async () => {
    const response = await axios.get<ApiResponse>(
      `${config.apiBaseUrl}/users`,
      {
        params: params,
      }
    );
    return response.data;
  });
}

// Fetch a single user by ID
export function useUserById(userId: string) {
  return useQuery<UserType, Error>(["user", userId], async () => {
    const response = await axios.get<{ user: UserType }>(
      `${config.apiBaseUrl}/users/${userId}`
    );
    return response.data.user;
  });
}

// // Create a new user
// export function useCreateUser() {
//   return useMutation<void, unknown, Partial<UserType>>(
//     (userData) => axios.post<void>(`${config.apiBaseUrl}/users`, userData)
//   );
// }

// // Update an existing user
// export function useUpdateUser() {
//   return useMutation<void, unknown, Partial<UserType>>(
//     (userData) => {
//       const { id, ...rest } = userData;
//       return axios.put<void>(`${config.apiBaseUrl}/users/${id}`, rest);
//     }
//   );
// }

// // Delete a user
// export function useDeleteUser() {
//   return useMutation<void, unknown, string>((userId) =>
//     axios.delete<void>(`${config.apiBaseUrl}/users/${userId}`)
//   );
// }
