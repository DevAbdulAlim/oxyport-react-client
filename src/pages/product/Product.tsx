import React from "react";
import { useCart } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import ProductImageSlide from "../../components/ProductImageSlide";
import ProductCard from "../../components/ProductCard";
import { useProductById } from "../../api/product";
import Loader from "../../components/ui/Loader";
import TabComponent from "./Description";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../../components/ui/Button";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const params = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useProductById(parseInt(params.productId!, 10));

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Not found</div>;
  }

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex pt-8 pb-12 space-x-12">
          <div className="w-1/2">
            <ProductImageSlide />
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

            <div className="flex items-center mb-8">
              <span className="mr-2">Rating: 1</span>
              {/* Add your rating component or styling here */}
            </div>

            {/* Buttons */}
            <div className="flex items-center mb-8 space-x-4">
              <Button
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
                Add to Cart
              </Button>
              <Button variant="secondary">Add to Wishlist</Button>
            </div>

            {/* Share Section */}
            <div className="flex items-center mb-8 space-x-4">
              <span> Share:</span>
              <FaFacebook className="text-2xl text-blue-500 cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600" />
              <FaInstagram className="text-2xl text-purple-500 cursor-pointer hover:text-purple-600" />
            </div>

            <p className="mb-8 text-gray-800">Guaranteed Safe Checkout</p>
            <div className="flex space-x-2">
              <img src="/img/payment-methods/discover.png" alt="Payment" />
              <img src="/img/payment-methods/mastercard.png" alt="Payment" />
              <img src="/img/payment-methods/paypal.png" alt="Payment" />
              <img src="/img/payment-methods/visa.png" alt="Payment" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <TabComponent />
        </div>
      </section>

      {/* recent products */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="mb-4 text-2xl">Recent Products</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard product={product} />
          </div>
        </div>
      </section>
    </>
  );
}
