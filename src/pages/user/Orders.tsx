import React from "react";
import Button from "../../components/Button";

const orders = [
  { id: 1, product: "Product A", quantity: 2, price: 30 },
  { id: 2, product: "Product B", quantity: 1, price: 20 },
  { id: 3, product: "Product C", quantity: 3, price: 15 },
];

const OrderList = () => {
  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold">Order List</h2>
      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-6 m-2 bg-white rounded-lg shadow-md "
          >
            <div className="mb-4 md:flex md:space-x-6 md:items-center md:justify-between md:mb-0">
              <h3 className="text-xl font-bold">Order #{order.id}</h3>
              <p className="text-gray-600">Product: {order.product}</p>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">Price: ${order.price}</p>
              <Button variant="ghost">View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
