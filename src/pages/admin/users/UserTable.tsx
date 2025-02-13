import type React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "../../../components/ui/Link";
import { truncateName, formatDate } from "../../../lib/utils";
import type { UserType } from "../../../lib/types";
import DeleteUser from "./DeleteUser";

interface UserTableProps {
  users: UserType[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden bg-white">
        <thead className="bg-green-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Avatar</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Active</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserType) => (
            <tr key={user.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{user.id}</td>
              <td className="px-4 py-2 text-nowrap">
                {user.avatar ? (
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </td>
              <td className="px-4 py-2 text-nowrap">
                {truncateName(user.name, 20)}
              </td>
              <td className="px-4 py-2 text-nowrap">{user.email}</td>
              <td className="px-4 py-2 text-nowrap">{user.role}</td>
              <td className="px-4 py-2 text-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.active === 1
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-4 py-2 text-nowrap">
                {formatDate(user.createdAt)}
              </td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/users/edit/${user.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <DeleteUser userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
