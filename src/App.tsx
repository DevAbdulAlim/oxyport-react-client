// App.tsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";



export default function App() {
  const login = () => {
    // Your login logic here
    console.log("User logged in");
  };

  const logout = () => {
    // Your logout logic here
    console.log("User logged out");
  };



  return (
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  );
}
