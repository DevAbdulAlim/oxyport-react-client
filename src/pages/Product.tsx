import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import config from "../config";
import { useParams } from "react-router-dom";
import { Product } from "../lib/types";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/products/${params.productId}`
        );
        setProduct(response.data.product);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-64 mb-4 rounded-md"
          />
        </div>
        <div className="w-1/2 px-8">
          <h2 className="mb-4 text-3xl font-semibold">{product.name}</h2>
          <p className="mb-4 text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mb-6 text-gray-800">{product.description}</p>
          <p className="mb-6 text-gray-800">{product.stock}</p>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                stock: product.stock,
                quantity: 1,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
