import React, { useState } from "react";

interface Order {
  id: number;
  productName: string;
  status: string;
}

const initialOrders: Order[] = [
  { id: 1, productName: "Product A", status: "Processing" },
  { id: 2, productName: "Product B", status: "Shipped" },
  { id: 3, productName: "Product C", status: "Delivered" },
];

const CancelOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleCancelOrder = (orderId: number) => {
    // Implement your cancel order logic here
    // This is a basic example, you might want to interact with your backend to cancel the order
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Cancelled" } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">Cancel Orders</h2>
      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 mb-4 bg-white rounded-md shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-lg font-bold">{order.productName}</span>
                <span className="ml-2 text-gray-500">
                  Status: {order.status}
                </span>
              </div>
              {order.status === "Processing" && (
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleCancelOrder(order.id)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CancelOrders;
