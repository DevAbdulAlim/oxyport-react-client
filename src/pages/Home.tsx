import React, { useContext } from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "../components/products/ProductCard";

export default function Home() {
  const { products, loading } = useProduct();

  return (
    <>
      <section className="container mx-auto mt-8">
        <h3 className="mb-6 text-3xl font-semibold">Featured Products</h3>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product: any) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
