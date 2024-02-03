import React from "react";
import { FaPrint, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

interface Payment {
  id: number;
  orderId: string;
  date: string;
  amount: number;
  method: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

const payment: Payment = {
  id: 1,
  customerName: "John Doe",
  orderId: "ORD123",
  date: "2024-02-01",
  amount: 50.0,
  method: "Cash",
  customerEmail: "john@example.com",
  customerPhone: "123-456-7890",
};

const PaymentDetailsPage: React.FC = () => {
  const handlePrintReceipt = () => {
    // Logic to print receipt
    console.log("Printing receipt...");
  };

  const handleSendReceipt = () => {
    // Logic to send receipt
    console.log("Sending receipt...");
  };

  const handleTrackOrder = () => {
    // Logic to track order
    console.log("Tracking order...");
  };

  return (
    <div className="container px-3 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Payment Details</h1>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-8">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="mb-4">
              <strong>Payment ID:</strong> {payment.id}
            </div>
            <div className="mb-4">
              <strong>Order ID:</strong> {payment.orderId}
            </div>
            <div className="mb-4">
              <strong>Date:</strong> {payment.date}
            </div>
            <div className="mb-4">
              <strong>Amount:</strong> ${payment.amount.toFixed(2)}
            </div>
            <div className="mb-4">
              <strong>Payment Method:</strong> {payment.method}
            </div>
            <div className="mb-4">
              <strong>Customer Name:</strong> {payment.customerName}
            </div>
            <div className="mb-4">
              <strong>Customer Email:</strong> {payment.customerEmail}
            </div>
            <div className="mb-4">
              <strong>Customer Phone:</strong> {payment.customerPhone}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="flex items-center px-4 py-2 mr-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={handlePrintReceipt}
            >
              <FaPrint className="mr-2" /> Print Receipt
            </button>
            <button
              className="flex items-center px-4 py-2 mr-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={handleSendReceipt}
            >
              <FaEnvelope className="mr-2" /> Resend Receipt
            </button>
            <button
              className="flex items-center px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
              onClick={handleTrackOrder}
            >
              <FaMapMarkedAlt className="mr-2" /> Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
