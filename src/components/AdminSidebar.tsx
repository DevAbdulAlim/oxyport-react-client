// AdminSidebar.tsx

import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const AdminSidebar: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="fixed left-0 w-64 h-full p-4 text-white bg-gray-800">
      <div className="mb-4 text-2xl font-semibold">Admin Dashboard</div>

      <ul>
        <li className="mb-2">
          <Link to="/admin" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/admin/categories"
            className="text-gray-300 hover:text-white"
          >
            Categories
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/orders" className="text-gray-300 hover:text-white">
            Orders
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/users" className="text-gray-300 hover:text-white">
            Users
          </Link>
        </li>
        <Button onClick={handleLogout}>Logout</Button>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
