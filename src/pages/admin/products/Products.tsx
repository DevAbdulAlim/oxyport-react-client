import React, { useContext, useEffect, useState } from "react";
import ProductTable from "../../../components/products/ProductTable";
import { useProduct } from "../../../context/ProductContext";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/Link";
import { productParams } from "../../../services/productService";

export default function Products() {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { fetchProducts, deleteProduct, products, total, error, loading } =
    useProduct();

  useEffect(() => {
    const params: productParams = {
      sortBy: "",
      sortOrder: "",
      search: "",
      page: currentPage.toString(),
    };

    fetchProducts(params);
  }, [currentPage]);

  const handleDelete = (productId: number) => {
    deleteProduct(productId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page ${page}`);
  };

  const handleSearch = () => {};

  const handleSort = () => {};

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">Admin Product List</h2>
        <Link to="/admin/products/create">Create Product</Link>
      </div>
      <div className="flex mb-4">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          className="px-2 py-1 border border-gray-400"
          placeholder="Search products..."
        />
        <label className="ml-4 mr-2">Sort by:</label>
        <select className="px-2 py-1 border border-gray-400">
          <option value="name">Name</option>
          <option value="price">Price</option>
          {/* Add more options as needed */}
        </select>
      </div>
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
