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
            src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
            alt={product.name}
            className="object-cover w-full mb-4 bg-gray-100 rounded-md"
          />
        </div>
        <div className="w-1/2 px-8">
          <h2 className="mb-4 text-3xl font-semibold">{product.name}</h2>
          <p className="mb-4 text-gray-600">
            <span className="mr-2 text-gray-400 line-through">$45454</span>$
            {product.price.toFixed(2)}
          </p>
          <p className="mb-6 text-gray-800">{product.description}</p>
          <p className="mb-6 text-gray-800">
            Products: {product.stock} Pieces Available
          </p>

          {/* Rating Information */}
          <div className="flex items-center mb-4">
            <span className="mr-2">Rating: 1</span>
            {/* Add your rating component or styling here */}
          </div>

          {/* Buttons */}
          <div className="flex items-center mb-4 space-x-4">
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
            <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-900 focus:outline-none">
              Add to Wishlist
            </button>
          </div>

          {/* Share Section */}
          <div className="flex items-center mb-4 space-x-2">
            Share:
            {/* Add your social media icons or sharing links here */}
          </div>

          {/* Safe Checkout Information */}
          <p className="mb-4 text-gray-800">Guaranteed Safe Checkout</p>

          {/* Payment Images */}
          <div className="flex space-x-2">
            {/* Add your payment images or icons here */}
            <img src="payment-image-1.png" alt="Payment Image" />
            <img src="payment-image-2.png" alt="Payment Image" />
            <img src="payment-image-3.png" alt="Payment Image" />
            <img src="payment-image-4.png" alt="Payment Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
