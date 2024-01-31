// import React from "react";
// import { FiEye, FiTrash2 } from "react-icons/fi";
// import Button from "../../../components/ui/Button";
// import Link from "../../../components/ui/Link";
// import { Order } from "../../../lib/types";
// import { formatDate } from "../../../lib/utils";
// import config from "../../../config/config";

// interface OrderTableProps {
//   orders: Order[];
//   onDelete: (id: number) => void;
// }

// const OrderTable: React.FC<OrderTableProps> = ({ orders, onDelete }) => {
//   return (
//     <div className="container mt-8 overflow-auto rounded-lg shadow">
//       <table className="min-w-full overflow-hidden g-white">
//         <thead className="bg-gray-200">
//           <tr className="text-gray-800">
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Customer</th>
//             <th className="px-4 py-2">Total Amount</th>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id} className="text-gray-700">
//               <td className="px-4 py-2 text-nowrap">{order.id}</td>
//               <td className="px-4 py-2 text-nowrap">{order.customerName}</td>
//               <td className="px-4 py-2 text-nowrap">${order.totalAmount}</td>
//               <td className="px-4 py-2 text-nowrap">
//                 {formatDate(order.createdAt)}
//               </td>
//               <td className="px-4 py-2 text-center text-nowrap">
//                 <Link
//                   to={`/order/${order.id}`}
//                   size="sm"
//                   variant="ghost"
//                   className="mr-2"
//                 >
//                   <FiEye />
//                 </Link>
//                 <Button
//                   onClick={() => onDelete(order.id)}
//                   size="sm"
//                   variant="ghost"
//                 >
//                   <FiTrash2 />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderTable;

import React from "react";

export default function OrderTable() {
  return <div>OrderTable</div>;
}
