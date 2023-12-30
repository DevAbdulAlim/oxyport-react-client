import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Product } from '../../models/Product';

interface ProductFormProps {
  onSubmit: (productData: Product) => void;
  editProduct?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, editProduct }) => {
  const [formData, setFormData] = useState<Product>({ id: 0, name: '', price: 0 });

  useEffect(() => {
    if (editProduct) {
      setFormData({ ...editProduct });
    } else {
      setFormData({ id: 0, name: '', price: 0 });
    }
  }, [editProduct]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: 0, name: '', price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
      </label>
      <button type="submit">{editProduct ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ProductForm;
