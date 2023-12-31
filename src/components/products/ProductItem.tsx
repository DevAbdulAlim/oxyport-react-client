import React from 'react';
import { Product } from '../../lib/models';



interface ProductItemProps {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onEdit, onDelete }) => {
  return (
    <li>
      <div>
        <strong>{product.name}</strong> - ${product.price}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default ProductItem;
