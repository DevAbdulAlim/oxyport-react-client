// import React from "react";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import Button from "../../../components/ui/Button";
// import Link from "../../../components/ui/Link";
// import { User } from "../../../lib/types";
// import { formatDate } from "../../../lib/utils";
// import config from "../../../config/config";

// interface UserTableProps {
//   users: User[];
//   onDelete: (id: number) => void;
// }

// const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
//   return (
//     <div className="container mt-8 overflow-auto rounded-lg shadow">
//       <table className="min-w-full overflow-hidden g-white">
//         <thead className="bg-gray-200">
//           <tr className="text-gray-800">
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Email</th>
//             <th className="px-4 py-2">Role</th>
//             <th className="px-4 py-2">Joined At</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="text-gray-700">
//               <td className="px-4 py-2 text-nowrap">{user.id}</td>
//               <td className="px-4 py-2 text-nowrap">{user.name}</td>
//               <td className="px-4 py-2 text-nowrap">{user.email}</td>
//               <td className="px-4 py-2 text-nowrap">{user.role}</td>
//               <td className="px-4 py-2 text-nowrap">
//                 {formatDate(user.createdAt)}
//               </td>
//               <td className="px-4 py-2 text-center text-nowrap">
//                 <Link
//                   to={`/admin/users/edit/${user.id}`}
//                   size="sm"
//                   variant="ghost"
//                   className="mr-2"
//                 >
//                   <FiEdit />
//                 </Link>
//                 <Button
//                   onClick={() => onDelete(user.id)}
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

// export default UserTable;

import React from "react";

export default function UserTable() {
  return <div>UserTable</div>;
}
