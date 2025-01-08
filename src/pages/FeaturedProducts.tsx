import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { productService } from "../api/api";
import { ProductType } from "../lib/types";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getProducts({ pageSize: 8 })
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-green-900 mb-4">
          Featured Products
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-12">
          Discover our handpicked collection of organic products.
        </p>
        {loading ? (
          <div className="flex items-center justify-center h-64 text-lg text-gray-600">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="transition-transform transform hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
