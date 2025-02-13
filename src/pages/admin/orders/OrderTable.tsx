import type React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "../../../components/ui/Link";
import { truncateName } from "../../../lib/utils";
import type { OrderType } from "../../../lib/types";
import DeleteOrder from "./DeleteOrder";

interface OrderTableProps {
  orders: OrderType[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden bg-white">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Total Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: OrderType) => (
            <tr key={order.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{order.id}</td>
              <td className="px-4 py-2 text-nowrap">
                {truncateName(order.name, 20)}
              </td>
              <td className="px-4 py-2 text-nowrap">
                ${order.total_amount.toFixed(2)}
              </td>
              <td className="px-4 py-2 text-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    order.order_status === "completed"
                      ? "bg-green-200 text-green-800"
                      : order.order_status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {order.order_status}
                </span>
              </td>
              <td className="px-4 py-2 text-nowrap">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/orders/edit/${order.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <DeleteOrder orderId={order.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
