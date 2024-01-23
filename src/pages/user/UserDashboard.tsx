import React from "react";

export default function UserDashboard() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-4 text-center bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold">66</h2>
          <p className="mt-2">My Purchases</p>
        </div>
        <div className="p-4 text-center bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold">66</h2>
          <p className="mt-2">My Cart</p>
        </div>
        <div className="p-4 text-center bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold">66</h2>
          <p className="mt-2">My Wishlist</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Recent Purchases</h2>
        {/* Add content for recent purchases */}
      </div>
    </div>
  );
}
