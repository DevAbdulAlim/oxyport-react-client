import { useState } from "react";
import Pagination from "../../../components/Pagination";
import { useDebounce } from "usehooks-ts";
import { FiSearch } from "react-icons/fi";
import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";
import Loader from "../../../components/ui/Loader";
import Link from "../../../components/ui/Link";
import OrderTable from "./OrderTable";
import { useOrders } from "../../../api/order";

export default function Orders() {
  const [sortBy, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, error } = useOrders({
    sortBy,
    search: debouncedSearch,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(
    data && data.totalItems ? data.totalItems / pageSize : 0
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const handleSort = (selectedSortBy: string) => {
    setSortBy(selectedSortBy);
  };

  return (
    <div className="container px-3 py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order List</h2>
        <Link to="/admin/orders/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 00-1 1v6H3a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Create Order
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between space-x-4 space-y-4 md:flex-row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          <div className="relative flex items-center md:w-64">
            <FiSearch className="absolute w-6 h-6 text-gray-400 pointer-events-none left-1 top-2" />
            <Input
              type="text"
              id="search"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="sortBy" className="mr-2 font-medium text-gray-700">
              Sort by:
            </label>
            <Select
              id="sortBy"
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="createdAt">Created At</option>
              <option value="status">Status</option>
            </Select>
          </div>
        </form>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : data?.orders && data?.orders.length > 0 ? (
        <OrderTable orders={data.orders} />
      ) : (
        <div>Not Found</div>
      )}
      <Pagination
        itemsPerPage={pageSize}
        totalItems={data?.orders.length ? data?.orders.length : 0}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
