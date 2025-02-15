import type React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CreditCard,
  Calendar,
  User,
  Mail,
  Phone,
  DollarSign,
  Hash,
} from "lucide-react";
import { PaymentType } from "../../lib/types";

const PaymentHistory: React.FC = () => {
  const {
    data: payments,
    isLoading,
    isError,
  } = useQuery<PaymentType[]>({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axios.get<{ payments: PaymentType[] }>(
        "/api/payments"
      );
      return data.payments;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-500">Error</h2>
          <p className="text-gray-700">
            An error occurred while fetching payment history. Please try again
            later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Payment History</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {payments?.map((payment) => (
          <div
            key={payment.id}
            className="overflow-hidden bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-2 text-blue-500" />
                  <span className="text-lg font-semibold text-gray-800">
                    {payment.method}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    payment.transactionId
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {payment.transactionId ? "Success" : "Pending"}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-2xl font-bold text-gray-800">
                    ${payment.amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <User className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-800">{payment.name}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-600">{payment.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-600">{payment.phone}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Hash className="w-4 h-4 mr-1" />
                  <span>Order ID: {payment.orderId}</span>
                </div>
                {payment.transactionId && (
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-1" />
                    <span>Trans ID: {payment.transactionId.slice(-4)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
