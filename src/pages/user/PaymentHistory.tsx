import React from "react";

const paymentHistoryData = [
  { id: 1, date: "10/15/23", amount: 50.25, status: "Success" },
  { id: 2, date: "10/10/23", amount: 30.5, status: "Success" },
  { id: 3, date: "10/05/23", amount: 25.75, status: "Failed" },
];

const PaymentHistory = () => {
  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">Payment History</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
        {paymentHistoryData.map((payment) => (
          <div
            key={payment.id}
            className="p-4 transition duration-300 transform bg-white rounded-md shadow-md md:flex md:justify-between hover:scale-105"
          >
            <p className="mb-2 text-gray-600">ID: {payment.id}</p>
            <p className="mb-2 text-gray-600">Date: {payment.date}</p>
            <p className="mb-2 text-gray-600">
              Amount: ${payment.amount.toFixed(2)}
            </p>
            <p
              className={`text-sm ${
                payment.status === "Success" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {payment.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
