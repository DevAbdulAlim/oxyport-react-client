"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Eye, Package, DollarSign, Calendar } from "lucide-react";
import { formatDate } from "../../lib/utils";
import Button from "../../components/ui/Button";

interface Order {
  id: number;
  name: string;
  address: string;
  city: string;
  zip: string;
  email: string;
  phone: string;
  order_status: string;
  total_amount: number;
  paid_amount: number;
  due_amount: number;
  payment_status: string;
  createdAt: string;
}

const fetchOrders = async (): Promise<Order[]> => {
  const { data } = await axios.get("/api/orders");
  return data.orders;
};

const OrderList = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        An error occurred while fetching orders
      </div>
    );

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Order List</h2>
      <div className="grid gap-6">
        {orders?.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Order #{order.id}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.order_status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : order.order_status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.order_status}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Customer</p>
                  <p className="text-gray-800">{order.name}</p>
                  <p className="text-gray-600">{order.email}</p>
                  <p className="text-gray-600">{order.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Shipping Address
                  </p>
                  <p className="text-gray-800">{order.address}</p>
                  <p className="text-gray-800">
                    {order.city}, {order.zip}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Order Details
                  </p>
                  <div className="flex items-center mt-1">
                    <Package className="w-4 h-4 mr-2 text-gray-500" />
                    <p className="text-gray-800">{order.order_status}</p>
                  </div>
                  <div className="flex items-center mt-1">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                    <p className="text-gray-800">{order.payment_status}</p>
                  </div>
                  <div className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <p className="text-gray-600">
                      {formatDate(new Date(order.createdAt))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Amount
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    ${order.total_amount.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Paid Amount
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    ${order.paid_amount.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Due Amount
                  </p>
                  <p className="text-lg font-semibold text-red-600">
                    ${order.due_amount.toFixed(2)}
                  </p>
                </div>
                <Button variant="ghost">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
