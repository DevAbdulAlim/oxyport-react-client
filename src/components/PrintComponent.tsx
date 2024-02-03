import React from "react";
import { ProductType } from "../lib/types";

const PrintComponent: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="hidden print:block">
      {/* Content to be printed */}
      <div className="p-4 border border-gray-200 rounded-lg">
        <h1 className="mb-4 text-2xl font-bold">{product.name}</h1>
        <p
          className="mb-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        />

        <p className="mb-2 text-gray-600">Price: ${product.price}</p>
        <p className="mb-2 text-gray-600">Discount: {product.discount}%</p>
        <p className="mb-2 text-gray-600">Stock: {product.stock}</p>
        <p className="mb-2 text-gray-600">Category: {product.category.name}</p>
        <p className="mb-2 text-gray-600">Seller: {product.user.name}</p>
      </div>
    </div>
  );
};

export default PrintComponent;
