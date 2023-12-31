import React, { useContext, useEffect } from "react";
import ProductTable from "../../../components/products/ProductTable";
import { ProductContext } from "../../../context/ProductContext";
import Pagination from "../../../components/Pagination";

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

  const handlePageChange = () => {
    
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-semibold">Admin Product List</h2>
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
