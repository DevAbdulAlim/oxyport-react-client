import React from "react";
import { Product } from "../../lib/types";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 z-10 px-2 py-1 text-white bg-red-400 rounded-tr-md rounded-bl-md">
        <span className="text-sm">Save X%</span>
      </div>

      {/* Card Image */}
      <div className="relative overflow-hidden h-80 group">
        <img
          src={process.env.PUBLIC_URL + "/img/products/product-10.png"}
          alt={product.name}
          className="object-cover w-full p-2 mb-4 transition-all duration-300 bg-gray-100 hover:scale-110"
        />
        <div className="absolute space-x-4 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bottom-4 left-1/2">
          <Button
            variant="secondary"
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
            <FaShoppingCart />
          </Button>
          <Button variant="secondary">
            <FaEye />
          </Button>
          <Button variant="secondary">
            <FaHeart />
          </Button>
        </div>
      </div>

      <Link
        to={`/product/${product.id}`}
        variant="link"
        className="flex items-center p-0 my-4 text-lg text-center "
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
