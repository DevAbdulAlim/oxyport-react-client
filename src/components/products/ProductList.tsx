import React, { useContext, useState } from 'react';
import { ProductContext, ProductContextValue } from '../../context/ProductContext';
import ProductItem from './ProductItem';

const ProductList: React.FC<{ productContext: ProductContextValue }> = ({ productContext }) => {
  const { products, loading, error, deleteProduct } = productContext;
  const [editProductId, setEditProductId] = useState<number | null>(null);

  const handleEditProduct = (productId: number) => {
    setEditProductId(productId);
  };

  const handleDeleteProduct = (productId: number) => {
    deleteProduct(productId);
  };

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-3xl font-bold">Product List</h2>
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 transition transform bg-white rounded-lg shadow-md hover:scale-105"
          >
            <ProductItem
              product={product}
              onEdit={() => handleEditProduct(product.id)}
              onDelete={() => handleDeleteProduct(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductContainer: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    // Handle the case where context value is undefined (optional)
    return <p className="text-red-500">Product context not available</p>;
  }

  return <ProductList productContext={productContext} />;
};

export default ProductContainer;
