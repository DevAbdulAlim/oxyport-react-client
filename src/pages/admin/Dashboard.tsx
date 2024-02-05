import {
  FaCubes,
  FaShoppingCart,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import SalesExpenseChart from "./SalesExpenseChart";
import { SalesByCategory } from "./SalseByCategory";
import RecentOrders from "./RecentOrders";
import StockOutProducts from "./StockOutProducts";
import Button from "../../components/ui/Button";

export default function Dashboard() {
  const data = [
    { name: "Total Categories", amount: 50, increase: 50, icon: <FaCubes /> },
    {
      name: "Total Products",
      amount: 1000,
      increase: 150,
      icon: <FaShoppingCart />,
    },
    {
      name: "Total Orders",
      amount: 500,
      increase: 100,
      icon: <FaClipboardList />,
    },
    {
      name: "Total Customers",
      amount: 750,
      increase: 150,
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="container px-3 py-8 mx-auto lg:px-4 xl:px-5">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 text-white rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-800"
          >
            <div className="flex items-center">
              <div className="p-3 mr-4 text-3xl bg-green-500 rounded-full shadow-md">
                {item.icon}
              </div>
              <div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-3xl font-bold">{`$${item.amount}`}</p>
                <p className="text-sm">{`+ $${item.increase}`}</p>
              </div>
            </div>
            <Button>See All</Button>
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
