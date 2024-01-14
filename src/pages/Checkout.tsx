import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';


const Checkout = () => {
  const {verifyToken} = useAuth()

useEffect(() => {
  (async () => {
    await verifyToken();
  })()
}, [])

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-semibold">Checkout</h2>
      <div className="flex">
        <div className="w-1/2">
          {/* Shipping Address */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Shipping Address</h3>
            {/* Add form fields for shipping address, e.g., name, address, etc. */}
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
            {/* Map through the items in the cart and display them */}
            {/* Replace the following with actual cart items */}
            <div className="flex justify-between">
              <span>Product Name</span>
              <span>$29.99</span>
            </div>
            {/* Repeat the above block for each item in the cart */}
          </div>
          
          {/* Total Amount */}
          <div className="flex justify-between pt-4 border-t">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">$XX.XX</span> {/* Replace with the actual total amount */}
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
