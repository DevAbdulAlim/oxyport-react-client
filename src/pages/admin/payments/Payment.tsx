import React from "react";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";
import { FiEye } from "react-icons/fi";

interface Payment {
  id: number;
  customerName: string;
  orderId: string;
  date: string;
  amount: number;
  method: string;
  customerEmail: string;
  customerPhone: string;
}

const dummyPayments: Payment[] = [
  {
    id: 1,
    customerName: "John Doe",
    orderId: "ORD123",
    date: "2024-02-01",
    amount: 50.0,
    method: "Cash",
    customerEmail: "john@example.com",
    customerPhone: "123-456-7890",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    orderId: "ORD124",
    date: "2024-01-30",
    amount: 75.0,
    method: "Credit Card",
    customerEmail: "jane@example.com",
    customerPhone: "987-654-3210",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    orderId: "ORD125",
    date: "2024-01-28",
    amount: 100.0,
    method: "Digital Wallet",
    customerEmail: "alice@example.com",
    customerPhone: "555-123-4567",
  },
  // Add more dummy payment data as needed
];

const Payment: React.FC = () => {
  const handleTrackOrder = (orderId: string) => {
    // Logic to track the order goes here
    console.log("Tracking order:", orderId);
  };

  return (
    <div className="container px-3 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Payment History</h1>
      <div className="overflow-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm leading-normal text-gray-600 bg-gray-200">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Customer Name</th>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Payment Method</th>
              <th className="px-6 py-3 text-left">Customer Email</th>
              <th className="px-6 py-3 text-left">Customer Phone</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 ">
            {dummyPayments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.id}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.customerName}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.orderId}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.date}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  ${payment.amount.toFixed(2)}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.method}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.customerEmail}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  {payment.customerPhone}
                </td>
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  <Link
                    to={`/admin/payments/${payment.id}`}
                    variant="secondary"
                    onClick={() => handleTrackOrder(payment.orderId)}
                    size="sm"
                  >
                    <FiEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
