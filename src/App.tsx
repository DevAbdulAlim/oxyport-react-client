// App.tsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
