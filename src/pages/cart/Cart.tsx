import React from "react";
import Link from "../../components/ui/Link";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../lib/types";
import Button from "../../components/ui/Button";
import { MdDelete } from "react-icons/md";

const Cart: React.FC = () => {
  const { items, handleIncrease, handleDecrease, removeFromCart } = useCart();

  // Calculate the total price and quantity of the cart
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container px-4 mx-auto my-12 text-green-900">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-green-900">
          Your Shopping Cart
        </h1>
        <Link to="/checkout">
          {" "}
          Proceed to Checkout ({totalQuantity} items, Total: $
          {cartTotal.toFixed(2)})
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item: CartItem) => (
          <div
            key={item.productId}
            className="overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
              <p>
                <span className="font-semibold">${item.price}</span>
                <span className="mx-2 font-semibold">x</span>
                <span className="font-semibold">{item.quantity}</span>
                <span className="mx-2 font-semibold">
                  ${item.quantity * item.price}
                </span>
              </p>
              <Button
                onClick={() => removeFromCart(item.productId)}
                variant="delete"
                className="text-red-500"
              >
                <MdDelete />
              </Button>
            </div>
            <div className="p-4">
              <img
                src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
                alt="Product"
                className="object-cover w-full h-40 mb-4"
              />

              <div className="flex justify-between">
                {" "}
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <div className="flex items-center space-x-2">
                  {item.quantity > 1 && (
                    <button
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-l-md"
                      aria-label="decrease item"
                      onClick={() => handleDecrease(item.productId)}
                    >
                      -
                    </button>
                  )}

                  <span className="text-xl">{item.quantity}</span>
                  {item.quantity < item.stock && (
                    <button
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-r-md"
                      aria-label="increase item"
                      onClick={() => handleIncrease(item.productId)}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-6 mt-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold">Cart Summary</h2>
          <p className="mt-2 text-lg">
            Total: <span className="font-bold">${cartTotal.toFixed(2)}</span>
          </p>
        </div>
        <Link to="/checkout">Proceed to Checkout ({totalQuantity} items)</Link>
      </div>
    </div>
  );
};

export default Cart;
