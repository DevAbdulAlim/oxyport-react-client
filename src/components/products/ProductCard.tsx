import React from "react";
import { Product } from "../../lib/types";
import Link from "../Link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 z-10 px-2 py-1 text-white bg-red-500 rounded-tr-md rounded-bl-md">
        <span className="text-sm">Save X%</span>
      </div>

      <div className="overflow-hidden h-80">
        <img
          src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
          alt={product.name}
          className="object-cover w-full p-2 mb-4 transition-all duration-300 bg-gray-100 hover:scale-110"
        />
      </div>

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
