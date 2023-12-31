// App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/products/ProductList';

export default function App() {
  const login = () => {
    // Your login logic here
    console.log('User logged in');
  };

  const logout = () => {
    // Your logout logic here
    console.log('User logged out');
  };

  return (
    <AuthProvider>
      <ProductProvider>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <ProductList />
      </ProductProvider>
    </AuthProvider>
  );
}
