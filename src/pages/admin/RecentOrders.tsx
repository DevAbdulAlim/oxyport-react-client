import React from "react";
import Button from "../../components/ui/Button";
import { FaChevronRight } from "react-icons/fa";
import Link from "../../components/ui/Link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";

const dummyOrders = [
  {
    id: 1,
    product: "Laptop",
    payment: "Credit Card",
    amount: 1200.0,
  },
  {
    id: 2,
    product: "Smartphone",
    payment: "PayPal",
    amount: 800.0,
  },
  {
    id: 3,
    product: "Headphones",
    payment: "Cash on Delivery",
    amount: 100.0,
  },
  {
    id: 4,
    product: "Tablet",
    payment: "Credit Card",
    amount: 500.0,
  },
  {
    id: 5,
    product: "Camera",
    payment: "PayPal",
    amount: 700.0,
  },
  // Add more dummy orders as needed
];

const RecentOrders = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 text-xl font-semibold">Recent Orders</h2>
        <Link to="/admin/orders" variant="link">
          <IoIosArrowDropright className="text-3xl" />
        </Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <div className="min-w-max">
          <div className="flex flex-col divide-y">
            <div className="flex items-center p-2 bg-green-100">
              <p className="flex-1 font-semibold">Order ID</p>
              <p className="flex-1 font-semibold">Product</p>
              <p className="flex-1 font-semibold">Payment Method</p>
              <p className="flex-1 font-semibold">Amount</p>
            </div>
            {dummyOrders.map((order) => (
              <div key={order.id} className="flex items-center p-2">
                <p className="flex-1">{order.id}</p>
                <p className="flex-1">{order.product}</p>
                <p className="flex-1">{order.payment}</p>
                <p className="flex-1">{`$${order.amount.toFixed(2)}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
