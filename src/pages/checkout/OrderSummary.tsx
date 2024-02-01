import React from "react";
import { CartItem } from "../../lib/types";

export default function OrderSummary({
  items,
  totalAmount,
}: {
  items: CartItem[];
  totalAmount: number;
}) {
  return (
    <div className="w-full px-8 md:w-1/2">
      <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
      {/* Display the list of items in the cart with their prices */}
      <div className="mb-4">
        {items.map((item) => (
          <div key={item.productId} className="flex justify-between">
            <span>{item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Shipping Fee */}
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>$0</span>
      </div>
      {/* Shipping Fee */}
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>$0</span>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between pt-4 border-t">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
        type="submit"
        // Add your onClick handler, e.g., to process the order
      >
        Process Order
      </button>
    </div>
  );
}
