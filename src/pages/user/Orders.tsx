import React from 'react';
import Button from '../../components/Button';

const orders = [
  { id: 1, product: 'Product A', quantity: 2, price: 30 },
  { id: 2, product: 'Product B', quantity: 1, price: 20 },
  { id: 3, product: 'Product C', quantity: 3, price: 15 },
];

const OrderList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Order List</h2>
      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-6 rounded-lg shadow-md m-2 lg:flex lg:space-x-10"
          >
            <h3 className="text-xl font-bold mb-2">Order #{order.id}</h3>
            <p className="text-gray-600 mb-2">Product: {order.product}</p>
            <p className="text-gray-600 mb-2">Quantity: {order.quantity}</p>
            <p className="text-gray-600">Price: ${order.price}</p>
            <Button variant="ghost">
                View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
