import React, { useContext, useEffect } from "react";
import ProductTable from "../../../components/products/ProductTable";
import { ProductContext } from "../../../context/ProductContext";
import Pagination from "../../../components/Pagination";
import Link from "../../../components/Link";

export default function Products() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return <div>Loading...</div>; // or handle the undefined case in another way
  }

  // Destructure the properties you need
  const { products, loading, error, deleteProduct } = productContext;

  const handleDelete = (productId: number) => {
    // You might want to show a confirmation dialog before deleting
    deleteProduct(productId);
  };

  const handlePageChange = () => {};

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
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
