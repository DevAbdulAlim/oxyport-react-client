import React from "react";
import { ProductType } from "../lib/types";
import Link from "./ui/Link";
import Button from "./ui/Button";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import config from "../config/config";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="relative bg-white rounded-lg overflow-hidden flex flex-col">
      <div className="absolute top-2 left-2 z-10 px-3 py-1 text-white bg-green-600 text-sm font-semibold rounded-md">
        <span>Save 25%</span>
      </div>

      <div className="relative overflow-hidden h-80 group">
        <img
          src={`${config.apiStaticPath}/images/${product.images.split(",")[0]}`}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute flex space-x-3 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bottom-4 left-1/2">
          <Button
            variant="secondary"
            onClick={() =>
              addToCart({
                productId: product.id,
                name: product.name,
                price: product.price,
                stock: product.stock,
                quantity: 1,
              })
            }
          >
            <FaShoppingCart />
          </Button>
          <Link
            to={`/product/${product.id}`}
            variant="secondary"
            className="p-4"
          >
            <FaEye />
          </Link>
          <Button variant="secondary">
            <FaHeart />
          </Button>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <Link
          to={`/product/${product.id}`}
          variant="link"
          className="block text-lg font-semibold text-center mt-4 mb-2 hover:text-green-700 transition-all duration-300"
        >
          {product.name}
        </Link>

        <div className="flex justify-center items-center space-x-4 mb-4">
          <del className="text-xl text-gray-500">$450</del>
          <span className="text-2xl font-semibold text-green-900">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
