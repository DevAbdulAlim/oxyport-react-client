import React, { useEffect, useState } from "react";
import ProductTable from "../../../components/products/ProductTable";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/Link";
import { useDebounce } from "usehooks-ts"; // Import the useDebounce hook
import { Product } from "../../../lib/types";
import { productService } from "../../../services/api";
import { FiSearch } from "react-icons/fi";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import NotFound from "../../../components/NotFound";
import Loading from "../../../components/Loading";
import ExportCSV from "../../../components/ExportCSV";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [error, setError] = useState();
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const debouncedSearch = useDebounce(search, 500); // Debounce the search value
  const debouncedSortBy = useDebounce(sortBy, 500); // Debounce the sortBy value

  useEffect(() => {
    const params = {
      sortBy: debouncedSortBy,
      sortOrder,
      search: debouncedSearch,
      page: page,
      pageSize: pageSize,
    };

    productService
      .getProducts(params)
      .then((response) => {
        setProducts(response.data.products);
        setTotalProducts(response.data.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        setError(error);
      });
  }, [page, pageSize, debouncedSortBy, sortOrder, debouncedSearch]);

  const handleDelete = (productId: number) => {
    productService
      .deleteProduct(productId)
      .then((response) => {
        console.log("Product deleted", response.data);
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.log("Product deleted Fail", error);
        setError(error);
      });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSearch = () => {
    // Implement your search logic here
    const params = {
      sortBy: debouncedSortBy,
      sortOrder,
      search: debouncedSearch,
      page: 1,
      pageSize: 5,
    };

    productService
      .getProducts(params)
      .then((response) => {
        setProducts(response.data.products);
        setTotalProducts(response.data.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        setError(error);
      });
  };

  const handleSort = (selectedSortBy: string) => {
    setSortBy(selectedSortBy);
    setSortOrder("asc");

    const params = {
      sortBy: selectedSortBy,
      sortOrder: "asc", // or 'desc' based on your logic
      search: debouncedSearch,
      page: 1,
      pageSize: 5,
    };

    productService
      .getProducts(params)
      .then((response) => {
        setProducts(response.data.products);
        setTotalProducts(response.data.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        setError(error);
      });
  };

  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <div className="container px-3 py-8 mx-auto">
      {/* topbar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
        <Link to="/admin/products/create">
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
          Create Product
        </Link>
      </div>

      {/* filter */}
      <div className="flex flex-col items-center justify-between space-x-4 space-y-4 xl:flex-row">
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
        <ExportCSV data={products} />
      </div>
      {/* product table */}
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error}</div>
      ) : products && products.length > 0 ? (
        <ProductTable products={products} onDelete={handleDelete} />
      ) : (
        <NotFound />
      )}

      {/* pagination */}
      <Pagination
        itemsPerPage={pageSize}
        totalItems={totalProducts}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
