import React from "react";
import Link from "../components/Link";

const Cart: React.FC = () => {
  const handleDecrease = () => {
    // Implement logic to decrease the quantity
    console.log("Decrease quantity");
  };

  const handleIncrease = () => {
    // Implement logic to increase the quantity
    console.log("Increase quantity");
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Your Shopping Cart</h1>

      {/* Product list */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Sample product card */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <img
            src={process.env.PUBLIC_URL + "/images/sample-product.jpg"}
            alt="Product"
            className="object-cover w-full h-40 mb-4"
          />
          <h2 className="mb-2 text-lg font-semibold">Product Name</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">$19.99</span>
            <div className="flex items-center space-x-2">
              <button
                aria-label="decrease item"
                onClick={handleDecrease}
                className="text-blue-500 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L11 5.414V16a1 1 0 1 1-2 0V5.414L3.707 10.707a1 1 0 1 1-1.414-1.414l6-6z"
                  />
                </svg>
              </button>
              <span className="text-xl">2</span>
              <button
                aria-label="increase item"
                onClick={handleIncrease}
                className="text-blue-500 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L9 14.586V4a1 1 0 1 1 2 0v10.586l5.707-5.707a1 1 0 1 1 1.414 1.414l-6 6z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={() => console.log("Remove clicked")}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>

        {/* Add more product cards as needed */}
      </div>

      {/* Cart summary */}
      <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-lg font-bold">$39.98</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-lg font-bold">Free</span>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold text-blue-500">$39.98</span>
        </div>
      </div>

      {/* Checkout button */}
      <div className="mt-8">
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
