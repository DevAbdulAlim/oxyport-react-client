import React from "react";
import { Product } from "../../lib/types";
import Link from "../Link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 px-2 py-1 text-white bg-red-500 rounded-tr-md rounded-bl-md">
        <span className="text-sm">Save X%</span>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
        alt={product.name}
        className="object-cover w-full h-64 p-2 mb-4 bg-gray-100"
      />

      <Link
        to={`/product/${product.id}`}
        variant="link"
        className="flex items-center p-0 mb-2 text-lg "
      >
        {product.name}
      </Link>
      <div className="flex items-center justify-center space-x-2">
        <del className="text-xl text-gray-500">$450</del>

        <div className="flex flex-col items-end">
          <span className="text-2xl font-semibold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
