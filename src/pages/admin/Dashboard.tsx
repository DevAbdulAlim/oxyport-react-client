import React from "react";
import SalesExpenseChart from "./SalesExpenseChart";
import { SalesByCategory } from "./SalseByCategory";
import RecentOrders from "./RecentOrders";
import StockOutProducts from "./StockOutProducts";

export default function Dashboard() {
  const totalSales = 354234;
  const salesThisMonth = 333;
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div className="flex items-center justify-between p-6 text-white rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="flex items-center">
              <div className="p-3 mr-4 bg-yellow-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold">Total Sales</p>
                <p className="text-3xl font-bold">{`$${totalSales}`}</p>
                <p className="text-sm">{`+ $${salesThisMonth}`}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-full">
              See All
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between py-20 min-h-[500px] lg:flex-row">
        <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
          <SalesExpenseChart />
        </div>
        <div className="w-full lg:w-1/2">
          <SalesByCategory />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <RecentOrders />
        <StockOutProducts />
      </div>
    </div>
  );
}
