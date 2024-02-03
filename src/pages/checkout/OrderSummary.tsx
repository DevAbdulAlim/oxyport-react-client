import React from "react";
import { CartItem } from "../../lib/types";

interface OrderSummaryProps {
  items: CartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  // Calculate order summary
  const shippingCharge = 30;
  const taxRate = 0.1; // 10%
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxes = subtotal * (taxRate / 100);
  const totalAmount = subtotal + shippingCharge + taxes;

  // Check if there are items in the order
  const hasItems = items.length > 0;

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
        <span>${shippingCharge.toFixed(2)}</span>
      </div>

      {/* Tax */}
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>${taxes.toFixed(2)}</span>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between pt-4 border-t">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
      </div>

      {/* Checkout Button (disabled if no items) */}
      <button
        className={`px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none ${
          !hasItems && "opacity-50 cursor-not-allowed"
        }`}
        type="submit"
        disabled={!hasItems}
      >
        Process Order
      </button>
    </div>
  );
};

export default OrderSummary;
