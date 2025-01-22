import { useState } from "react";
import Pagination from "../../../components/Pagination";
import { useDebounce } from "usehooks-ts";
import { FiSearch } from "react-icons/fi";
import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";
import Loader from "../../../components/ui/Loader";
import Link from "../../../components/ui/Link";
import CategoryTable from "./CategoryTable";
import { useCategories } from "../../../api/category";

export default function Categories() {
  // State management
  const [sortBy, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  // Debounced search to minimize API calls
  const debouncedSearch = useDebounce(search, 500);

  // Fetching categories data
  const { data, isLoading, error } = useCategories({
    sortBy,
    search: debouncedSearch,
    page,
    pageSize,
  });

  // Calculate total pages
  const totalPages = Math.ceil(
    data?.totalItems ? data.totalItems / pageSize : 0
  );

  // Event handlers
  const handlePageChange = (page: number) => setPage(page);
  const handleSearch = () => setPage(1);
  const handleSort = (selectedSortBy: string) => setSortBy(selectedSortBy);

  return (
    <div className="container px-3 py-8 mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Category List</h2>
        <Link
          to="/admin/categories/create"
          className="flex items-center text-blue-500"
        >
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
          Create Category
        </Link>
      </div>

      {/* Search and Sort Section */}
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          {/* Search Input */}
          <div className="relative flex items-center md:w-64">
            <FiSearch className="absolute w-6 h-6 text-gray-400 left-2 top-2" />
            <Input
              type="text"
              id="search"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center">
            <label htmlFor="sortBy" className="mr-2 font-medium text-gray-700">
              Sort by:
            </label>
            <Select
              id="sortBy"
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="createdAt">Created At</option>
            </Select>
          </div>
        </form>
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
      <Pagination
        itemsPerPage={pageSize}
        totalItems={data?.totalItems || 0}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
