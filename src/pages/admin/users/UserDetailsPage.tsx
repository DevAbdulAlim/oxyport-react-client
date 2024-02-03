import React from "react";
import { FiEdit, FiTrash2, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";

const UserDetailsPage: React.FC = () => {
  // Sample user data
  const user = {
    id: 123,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    role: "Admin",
    createdAt: "2022-01-01T12:00:00Z",
    lastLogin: "2024-01-30T18:30:00Z",
    profileImage: "https://via.placeholder.com/150",
    orders: [
      { id: 1, total: 100.0, status: "Delivered" },
      { id: 2, total: 150.0, status: "Pending" },
      { id: 3, total: 200.0, status: "Processing" },
    ],
  };

  return (
    <div className="container px-3 mx-auto mt-8">
      {/* User Details */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          User Details
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">
                <FiMapPin className="inline-block mr-1" />
                {user.address}
              </p>
            </div>
          </div>
          <div>
            <p>
              <span className="font-semibold">Role:</span> {user.role}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{" "}
              {new Date(user.lastLogin).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Order History
        </h2>
        <div>
          {user.orders.map((order: any) => (
            <div
              key={order.id}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <div>
                <p className="text-lg font-semibold">Order ID: {order.id}</p>
                <p className="text-gray-600">Total: ${order.total}</p>
              </div>
              <div>
                <p className="text-gray-600">{order.status}</p>
                <Button size="sm" variant="ghost">
                  <FiMail className="mr-2" />
                  Resend Email
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end">
        <Button size="lg" variant="secondary" className="mr-4">
          <FiEdit className="mr-2" />
          Edit User
        </Button>
        <Button size="lg" variant="secondary" className="mr-4">
          <FiTrash2 className="mr-2" />
          Delete User
        </Button>
        <Button size="lg" variant="secondary">
          <FiMail className="mr-2" />
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default UserDetailsPage;
