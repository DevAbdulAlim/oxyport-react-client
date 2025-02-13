import Pagination from "../../../components/Pagination";
import Loader from "../../../components/ui/Loader";
import Link from "../../../components/ui/Link";
import OrderTable from "./OrderTable";
import { useQuery } from "@tanstack/react-query";
import { api as axios } from "../../../lib/api";
import { FaPlus } from "react-icons/fa";
import Search from "../../../components/Search";
import { useSearchParams } from "react-router-dom";
import Sort from "../../../components/Sort";

export default function Orders() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const page = searchParams.get("page") || "1";
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "10");

  // Fetching orders data
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", search, sortBy, page, pageSize],
    queryFn: () =>
      axios
        .get(`/orders`, {
          params: {
            search: search,
            sortBy,
            page,
            pageSize,
          },
        })
        .then((res) => res.data),
  });

  return (
    <div className="container px-3 py-8 mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order List</h2>
        <Link to="/admin/orders/create">
          <FaPlus className="mr-2" />
          Create Order
        </Link>
      </div>

      {/* Search and Sort Section */}
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Search />
          <Sort
            options={[
              { value: "createdAt", label: "Date" },
              { value: "total_amount", label: "Total Amount" },
              { value: "order_status", label: "Order Status" },
              { value: "payment_status", label: "Payment Status" },
            ]}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="text-red-500">Error: {error.message}</div>
        ) : data?.orders && data?.orders?.length > 0 ? (
          <OrderTable orders={data.orders} />
        ) : (
          <div className="text-gray-500">No orders found.</div>
        )}
      </div>

      {/* Pagination */}
      <Pagination totalItems={data?.totalItems || 0} />
    </div>
  );
}
