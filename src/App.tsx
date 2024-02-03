import { AuthProvider } from "./context/AuthContext";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { CartProvider } from "./context/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
