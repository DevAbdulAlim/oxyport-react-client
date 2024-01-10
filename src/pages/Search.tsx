import React, { useContext, useState } from "react";
import ProductCard from "../components/products/ProductCard";

import { useProduct } from "../context/ProductContext";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { products, loading } = useProduct();

  const handleSearch = () => {};

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-semibold">Product Search</h2>

      {/* Display Search Results */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
