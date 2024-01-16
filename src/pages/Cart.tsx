import React from "react";
import Link from "../components/Link";
import { useCart } from "../context/CartContext";
import { CartItem } from "../lib/types";

const Cart: React.FC = () => {
  const { items, handleIncrease, handleDecrease, removeFromCart } = useCart();

  // Calculate the total price and quantity of the cart
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <Link
          to="/checkout"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout ({totalQuantity} items)
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {items.map((item: CartItem) => (
          <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
            <img
              src={process.env.PUBLIC_URL + "/images/sample-product.jpg"}
              alt="Product"
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">${item.price} each</p>
              <div className="flex items-center space-x-2 mt-2">
                {item.quantity > 1 && (
                  <button
                    aria-label="decrease item"
                    onClick={() => handleDecrease(item.id)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    -
                  </button>
                )}

                <span className="text-xl">{item.quantity}</span>
                {item.quantity < item.stock && (
                  <button
                    aria-label="increase item"
                    onClick={() => handleIncrease(item.id)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    +
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 mt-2 focus:outline-none"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between">
          <span className="text-lg">Total:</span>
          <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-center"
        >
          Proceed to Checkout ({totalQuantity} items)
        </Link>
      </div>
    </div>
  );
};

export default Cart;
