import React from "react";
import { Product } from "../../lib/types";
import Link from "../Link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      <img
        src=""
        alt={product.name}
        className="object-cover w-full h-32 mb-4 rounded-md"
      />
      <div className="flex items-center justify-between mb-2">
        <Link to={`/product/${product.id}`} variant="link" className="text-lg">{product.name}</Link>
        <span className="text-gray-500">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
