import type React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "../../../components/ui/Link";
import { formatDate, formatCurrency } from "../../../lib/utils";
import type { PaymentType } from "../../../lib/types";
import DeletePayment from "./DeletePayment";

interface PaymentTableProps {
  payments: PaymentType[];
}

const PaymentTable: React.FC<PaymentTableProps> = ({ payments }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden bg-white">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment: PaymentType) => (
            <tr key={payment.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{payment.id}</td>
              <td className="px-4 py-2 text-nowrap">{payment.orderId}</td>
              <td className="px-4 py-2 text-nowrap">{payment.name}</td>
              <td className="px-4 py-2 text-nowrap">{payment.email}</td>
              <td className="px-4 py-2 text-nowrap">
                {formatCurrency(payment.amount)}
              </td>
              <td className="px-4 py-2 text-nowrap">{payment.method}</td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/payments/edit/${payment.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <DeletePayment paymentId={payment.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
