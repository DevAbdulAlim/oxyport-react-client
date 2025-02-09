import { useState } from "react";
import ProductTable from "./ProductTable";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/ui/Link";
import { useDebounce } from "usehooks-ts";
import { FiSearch } from "react-icons/fi";
import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";
import NotFound from "../../../components/NotFound";
import ExportCSV from "../../../components/ExportCSV";
import Loader from "../../../components/ui/Loader";
import ErrorPage from "../../../components/ErrorPage";
import {
  useDeleteProduct,
  useProducts,
} from "../../../hooks/useProductQueries";
import { FaPlus } from "react-icons/fa";

export default function Products() {
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const debouncedSearch = useDebounce(search, 500);
  const debouncedSortBy = useDebounce(sortBy, 500);

  const { mutate } = useDeleteProduct();
  const { data, isLoading, error } = useProducts({
    sortBy: debouncedSortBy,
    sortOrder,
    search: debouncedSearch,
    page: page,
    pageSize: pageSize,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const handleSort = (selectedSortBy: string) => {
    setSortBy(selectedSortBy);
  };

  const handleDelete = (productId: number) => {
    mutate(productId);
    console.log("Deleted Product", productId);
  };

  const totalPages = Math.ceil(
    data && data.totalItems ? data.totalItems / pageSize : 0
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage message={error.message} />;

  return (
    <div className="container px-3 py-8 mx-auto">
      {/* topbar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
        <Link to="/admin/products/create">
          <FaPlus className="mr-2" />
          Create Product
        </Link>
      </div>

      {/* filter */}
      <div className="flex flex-col items-center justify-between space-x-4 space-y-4 md:flex-row">
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          <div className="relative flex items-center md:w-64">
            <FiSearch className="absolute w-6 h-6 text-gray-400 pointer-events-none left-1 top-2" />
            <Input
              type="text"
              id="search"
              placeholder="Search products..."
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
              <option value="name">Name</option>
              <option value="price">Price</option>
            </Select>
          </div>
        </form>
        {data && <ExportCSV data={data.products} />}
      </div>

      {/* product table */}
      {data?.products?.length ? (
        <ProductTable products={data.products} onDelete={handleDelete} />
      ) : (
        <NotFound />
      )}

      {/* pagination */}
      <Pagination totalItems={data?.products ? data.products.length : 0} />
    </div>
  );
}
