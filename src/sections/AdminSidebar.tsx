import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome, IoIosListBox, IoIosCart, IoMdPeople } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { GiMoebiusTriangle } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import Button from "../components/Button";

const AdminSidebar = ({
  open,
  handleNavToggle,
}: {
  open: boolean;
  handleNavToggle: () => void;
}) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <nav
      className={`fixed   left-0 h-full p-4 group hover:w-64 overflow-hidden text-white bg-gray-800 ${
        open ? "w-64 block" : "xl:w-16 hidden xl:block"
      }`}
    >
      <div className="flex space-x-4">
        <GiMoebiusTriangle className="text-4xl" />
        <span
          className={`${
            open ? "block" : "hidden"
          } mb-8 group-hover:block text-2xl font-semibold`}
        >
          ActivEco
        </span>
      </div>
      <Button
        onClick={handleNavToggle}
        variant="ghost"
        className={` absolute  group-hover:block top-2 right-2 ${
          open ? "block bg-gray-700" : "xl:hidden"
        }`}
      >
        <ImMenu />
      </Button>
      <ul>
        <li className="flex items-center mb-4">
          <IoIosHome className="text-2xl" />
          <Link
            to="/admin"
            className={`${
              open ? "block" : "hidden"
            } text-gray-300 group-hover:block ml-2 hover:text-white`}
          >
            Dashboard
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <IoIosListBox className="text-2xl" />
          <Link
            to="/admin/categories"
            className={`${
              open ? "block" : "hidden"
            } text-gray-300 group-hover:block ml-2 hover:text-white`}
          >
            Categories
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <IoIosCart className="text-2xl" />
          <Link
            to="/admin/products"
            className={`${
              open ? "block" : "hidden"
            } text-gray-300 group-hover:block ml-2 hover:text-white`}
          >
            Products
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <IoIosCart className="text-2xl" />
          <Link
            to="/admin/orders"
            className={`${
              open ? "block" : "hidden"
            } text-gray-300 group-hover:block ml-2 hover:text-white`}
          >
            Orders
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <IoMdPeople className="text-2xl" />
          <Link
            to="/admin/users"
            className={`${
              open ? "block" : "hidden"
            } text-gray-300 group-hover:block ml-2 hover:text-white`}
          >
            Users
          </Link>
        </li>
      </ul>

      <Button
        variant="ghost"
        onClick={handleLogout}
        className="absolute p-0 hover:p-2 bottom-4"
      >
        <FiLogOut className="text-2xl" />
        <span
          className={`${open ? "block" : "hidden"} ml-2 group-hover:block `}
        >
          {" "}
          Logout
        </span>
      </Button>
    </nav>
  );
};

export default AdminSidebar;
