import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div className="flex container mx-auto py-20">
      <nav className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li className="mb-2">
            <Link to="/user" className="text-blue-500 hover:underline">Orders</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/wishlist" className="text-blue-500 hover:underline">Wishlist</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/support-tickets" className="text-blue-500 hover:underline">Support Tickets</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/profile" className="text-blue-500 hover:underline">Profile</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/address" className="text-blue-500 hover:underline">Address</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/payment-methods" className="text-blue-500 hover:underline">Payment Methods</Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
}
