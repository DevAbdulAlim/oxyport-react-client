import React from "react";
import Link from "../components/Link";
import { useCart } from "../context/CartContext";
import { CartItem } from "../lib/types";

const Cart: React.FC = () => {
  const { items, handleIncrease, handleDecrease,  removeFromCart } = useCart();



  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item: CartItem) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={process.env.PUBLIC_URL + "/images/sample-product.jpg"}
              alt="Product"
              className="object-cover w-full h-40 mb-4"
            />
            <h2 className="mb-2 text-lg font-semibold">{item.name}</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold">${item.price}</span>
              <div className="flex items-center space-x-2">
                <button
                  aria-label="decrease item"
                  onClick={() => handleDecrease(item.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  decrease
                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  aria-label="increase item"
                  onClick={() => handleIncrease(item.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  increase
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
        {/* ... (unchanged code for cart summary) */}
      </div>

      <div className="mt-8">
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
