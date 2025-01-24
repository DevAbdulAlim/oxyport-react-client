import axios from "axios";

const API_URL = "/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// add interceptors here if needed
api.interceptors.request.use((config) => {
  // add authentication headers or other modifications here
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle global error responses here
    return Promise.reject(error);
  }
);
