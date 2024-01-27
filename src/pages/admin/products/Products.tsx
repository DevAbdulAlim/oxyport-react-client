import React, { useEffect, useState } from "react";
import ProductTable from "../../../components/products/ProductTable";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/Link";
import { useDebounce } from "usehooks-ts"; // Import the useDebounce hook
import { Product } from "../../../lib/types";
import { productService } from "../../../services/api";

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
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">Admin Product List</h2>
        <Link to="/admin/products/create">Create Product</Link>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex mb-4">
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className="px-2 py-1 border border-gray-400"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="px-2 py-1 ml-2 text-white bg-blue-500"
          >
            Search
          </button>
          <label className="ml-4 mr-2">Sort by:</label>
          <select
            className="px-2 py-1 border border-gray-400"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            title="Sort by"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : products && products.length > 0 ? (
        <ProductTable products={products} onDelete={handleDelete} />
      ) : (
        <div>No products found.</div>
      )}
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
