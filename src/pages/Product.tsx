import React from 'react';

const Product = () => {
  // Placeholder product details
  const product = {
    id: 1,
    name: 'Product Name',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula odio at felis aliquam, in tincidunt odio facilisis.',
    imageUrl: 'https://via.placeholder.com/400', // Replace with the actual URL of your product image
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-64 mb-4 rounded-md"
          />
        </div>
        <div className="w-1/2 px-8">
          <h2 className="mb-4 text-3xl font-semibold">{product.name}</h2>
          <p className="mb-4 text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mb-6 text-gray-800">{product.description}</p>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
            // Add your onClick handler, e.g., to add the product to the cart
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
