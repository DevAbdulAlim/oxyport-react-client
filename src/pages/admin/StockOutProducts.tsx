import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "../../components/ui/Link";

const dummyStockOutProducts = [
  {
    id: 1,
    product: "Monitor",
    stock: 3,
    amount: 300.0,
  },
  {
    id: 2,
    product: "Printer",
    stock: 1,
    amount: 120.0,
  },
  {
    id: 3,
    product: "External Hard Drive",
    stock: 6,
    amount: 180.0,
  },
  {
    id: 4,
    product: "Keyboard",
    stock: 2,
    amount: 50.0,
  },
  {
    id: 5,
    product: "Mouse",
    stock: 4,
    amount: 80.0,
  },
];

const StockOutProducts = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 text-xl font-semibold">Stock Out Products</h2>
        <Link to="/admin/orders" variant="link">
          <IoIosArrowDropright className="text-3xl" />
        </Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <div className="min-w-max">
          <div className="flex flex-col divide-y">
            <div className="flex items-center p-2 bg-green-100">
              <p className="flex-1 font-semibold">Product</p>
              <p className="flex-1 font-semibold">Stock</p>
              <p className="flex-1 font-semibold">Amount</p>
            </div>
            {dummyStockOutProducts.map((stockOutProduct) => (
              <div key={stockOutProduct.id} className="flex items-center p-2">
                <p className="flex-1">{stockOutProduct.product}</p>
                <p className="flex-1">{stockOutProduct.stock}</p>
                <p className="flex-1">{`$${stockOutProduct.amount.toFixed(
                  2
                )}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockOutProducts;
