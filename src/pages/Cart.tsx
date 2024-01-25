import React from "react";
import Link from "../components/Link";
import { useCart } from "../context/CartContext";
import { CartItem } from "../lib/types";
import Button from "../components/Button";

const Cart: React.FC = () => {
  const { items, handleIncrease, handleDecrease, removeFromCart } = useCart();

  // Calculate the total price and quantity of the cart
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container p-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <Link
          to="/checkout"
          className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
        >
          Proceed to Checkout ({totalQuantity} items)
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {items.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center py-4 border-b border-gray-200"
          >
            <img
              src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
              alt="Product"
              className="object-cover w-20 h-20 mr-4 rounded-md"
            />
            <div className="flex-1">
              <h2 className="mb-2 text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price} each</p>
              <div className="flex items-center mt-2 space-x-2">
                {item.quantity > 1 && (
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="decrease item"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </Button>
                )}

                <span className="text-xl">{item.quantity}</span>
                {item.quantity < item.stock && (
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="increase item"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </Button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <Button onClick={() => removeFromCart(item.id)} variant="delete">
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
        <div className="flex justify-between">
          <span className="text-lg">Total:</span>
          <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full px-6 py-3 mt-4 text-center text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
        >
          Proceed to Checkout ({totalQuantity} items)
        </Link>
      </div>
    </div>
  );
};

export default Cart;
