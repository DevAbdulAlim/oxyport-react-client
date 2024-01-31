// App.tsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}
