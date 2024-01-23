import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaStar,
  FaCog,
  FaBan,
  FaSignOutAlt,
} from "react-icons/fa";

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Dashboard" },
  { path: "/profile", label: "My Profile" },
  { path: "/orders", label: "Order Products" },
  { path: "/payment-history", label: "Payment History" },
  { path: "/reviews", label: "Reviews" },
  { path: "/settings", label: "Settings" },
  { path: "/cancel-orders", label: "Cancel Orders" },
  { path: "/logout", label: "Logout" },
];

const iconMap: Record<string, React.ElementType> = {
  "/": FaUser,
  "/profile": FaUser,
  "/orders": FaShoppingCart,
  "/payment-history": FaMoneyBillAlt,
  "/reviews": FaStar,
  "/settings": FaCog,
  "/cancel-orders": FaBan,
  "/logout": FaSignOutAlt,
};

export default function UserLayout() {
  const location = useLocation();

  const renderNavItem = ({ path, label }: NavItem) => {
    const Icon = iconMap[path];
    return (
      <li
        className={`mb-8 text-lg ${
          location.pathname.includes(path) ? "font-bold" : ""
        }`}
        key={path}
      >
        <Link to={`/user${path}`} className="flex items-center hover:underline">
          {Icon && <Icon className="mr-2" />}
          {label}
        </Link>
      </li>
    );
  };

  return (
    <div className="container py-20 mx-auto">
      <div className="flex items-center">
        <img
          src="/img/profile.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full"
        />
        <div className="ml-4">
          <p className="text-2xl">Hello,</p>
          <h2 className="text-4xl font-bold">Jay Anne</h2>
        </div>
      </div>
      <div className="mt-8 border-t md:flex">
        <nav className="p-4 bg-gray-200 md:w-1/4">
          <ul>{navItems.map(renderNavItem)}</ul>
        </nav>

        <div className="w-3/4 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
