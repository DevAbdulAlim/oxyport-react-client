import React from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";

interface OrderTableProps {
  orders: any[];
  // onDelete: (id: number) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden g-white">
        <thead className="bg-gray-200">
          <tr className="text-gray-800">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Total Amount</th>
            <th className="px-4 py-2">Order Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any) => (
            <tr key={order.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{order.id}</td>
              <td className="px-4 py-2 text-nowrap">{order.name}</td>
              <td className="px-4 py-2 text-nowrap">{order.total_amount}</td>
              <td className="px-4 py-2 text-nowrap">{order.order_status}</td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/orders/${order.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEye />
                </Link>
                <Button
                  // onClick={() => onDelete(order.id)}
                  size="sm"
                  variant="ghost"
                >
                  <FiTrash2 />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
