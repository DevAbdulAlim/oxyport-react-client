import React, { useState, useEffect } from "react";
import ProductForm from "../../../components/products/ProductForm";
import axios from "axios";
import { Product, ProductFormValues } from "../../../lib/types";
import { useParams } from "react-router-dom";
import config from "../../../config";

export default function EditProducts() {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/products/${productId}`
        );
        setProduct(response.data.product as Product);
      } catch (error) {
        console.error("Failed to fetch product", error);
        // Handle the error, show a message, or redirect as needed
      }
    };

    fetchProductDetails();
  }, [productId]);

  const initialValues: ProductFormValues = {
    name: product ? product.name : "",
    description: product?.description ? product.description : "",
    price: product ? product.price : 0,
    image: product ? product.image : "",
    stock: product ? product.stock : 0,
    categoryId: product ? product.categoryId : 0,
    userId: product ? product.userId : 0,
  };

  return (
    <div>
      {product && <ProductForm defaultValue={initialValues} edit={true} />}
    </div>
  );
}
