import React, { useContext, useEffect, useState } from "react";
import ProductTable from "../../../components/products/ProductTable";
import { useProduct } from "../../../context/ProductContext";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/Link";
import { productParams } from "../../../services/productService";

export default function Products() {
  const [itemsPerPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { fetchProducts, deleteProduct, products, total, error, loading } =
    useProduct();

  useEffect(() => {
    const params: productParams = {
      sortBy,
      sortOrder,
      search,
      page: currentPage.toString(),
    };

    fetchProducts(params);
  }, [currentPage, sortBy, sortOrder, search]);

  const handleDelete = (productId: number) => {
    deleteProduct(productId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    // Implement your search logic here
    const params: productParams = {
      sortBy,
      sortOrder,
      search,
      page: "1",
    };

    fetchProducts(params);
  };

  const handleSort = (selectedSortBy: string) => {
    // Implement your sorting logic here
    setSortBy(selectedSortBy);
    // You may also want to toggle sortOrder between 'asc' and 'desc' based on the current state
    setSortOrder("asc");

    const params: productParams = {
      sortBy: selectedSortBy,
      sortOrder: "asc", // or 'desc' based on your logic
      search,
      page: "1",
    };

    fetchProducts(params);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

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
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products && products.length > 0 ? (
        <ProductTable products={products} onDelete={handleDelete} />
      ) : (
        <div>No products found.</div>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
