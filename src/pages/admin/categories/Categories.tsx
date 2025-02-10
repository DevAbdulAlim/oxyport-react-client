import Pagination from "../../../components/Pagination";
import Loader from "../../../components/ui/Loader";
import Link from "../../../components/ui/Link";
import CategoryTable from "./CategoryTable";
import { useQuery } from "@tanstack/react-query";
import { api as axios } from "../../../lib/api";
import { FaPlus } from "react-icons/fa";
import Search from "../../../components/Search";
import { useSearchParams } from "react-router-dom";
import Sort from "../../../components/Sort";

export default function Categories() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const page = searchParams.get("page") || "1";
  const pageSize = parseInt(searchParams.get("pageSize") || "10");

  // Fetching categories data
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories", search, sortBy, page, pageSize],
    queryFn: () =>
      axios
        .get(`/categories`, {
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
        <h2 className="text-2xl font-bold text-gray-800">Category List</h2>
        <Link to="/admin/categories/create">
          <FaPlus className="mr-2" />
          Create Category
        </Link>
      </div>

      {/* Search and Sort Section */}
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Search />
          <Sort
            options={[
              { value: "name", label: "Name" },
              { value: "createdAt", label: "Created At" },
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
        ) : data?.categories && data?.categories?.length > 0 ? (
          <CategoryTable categories={data.categories} />
        ) : (
          <div className="text-gray-500">No categories found.</div>
        )}
      </div>

      {/* Pagination */}
      <Pagination totalItems={data?.totalItems || 0} />
    </div>
  );
}
