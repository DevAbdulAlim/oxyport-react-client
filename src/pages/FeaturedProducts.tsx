import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { productService } from "../api/api";
import { Product } from "../lib/types";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getProducts()
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  return (
    <section className="container py-20 mx-auto">
      <h3 className="mb-6 text-3xl font-semibold">Featured Products</h3>
      {loading ? (
        <div className="flex items-center justify-center h-64">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
