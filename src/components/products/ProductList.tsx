import React, { useContext, useState } from 'react';
import { ProductContext, ProductContextValue } from '../../context/ProductContext';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';

const ProductList: React.FC<{ productContext: ProductContextValue }> = ({ productContext }) => {
  const { products, loading, error, createProduct, updateProduct, deleteProduct } = productContext;
  const [editProductId, setEditProductId] = useState<number | null>(null);

  const handleEditProduct = (productId: number) => {
    setEditProductId(productId);
  };

  const handleDeleteProduct = (productId: number) => {
    deleteProduct(productId);
  };

  return (
    <div>
      <h2>Product List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={() => handleEditProduct(product.id)}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))}
      </ul>
      <ProductForm
        onSubmit={(productData) => {
          if (editProductId) {
            updateProduct(editProductId, productData);
            setEditProductId(null);
          } else {
            createProduct(productData);
          }
        }}
        editProduct={editProductId ? products.find((p) => p.id === editProductId) : undefined}
      />
    </div>
  );
};

const ProductContainer: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    // Handle the case where context value is undefined (optional)
    return <p>Product context not available</p>;
  }

  return <ProductList productContext={productContext} />;
};

export default ProductContainer;
