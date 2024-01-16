import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items } = useCart();

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    // Add more fields as needed
  });

  // Calculate the total amount
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-semibold">Checkout</h2>
      <div className="flex">
        <div className="w-1/2">
          {/* Shipping Address */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Shipping Address</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={shippingAddress.name}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                  className="w-full p-2 mt-1 border rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  value={shippingAddress.address}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                  className="w-full p-2 mt-1 border rounded-md"
                  placeholder="123 Street, City, Country"
                />
              </div>
              {/* Add more form fields for shipping address */}
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-1/2 px-8">
          <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
          {/* Display the list of items in the cart with their prices */}
          <div className="mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="flex justify-between pt-4 border-t">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
            // Add your onClick handler, e.g., to process the order
          >
            Process Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
