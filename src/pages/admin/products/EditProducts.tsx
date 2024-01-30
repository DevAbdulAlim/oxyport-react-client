import React, { useState, useEffect } from "react";
import ProductFormContainer from "../../../components/products/ProductForm";
import { Product, ProductFormValues } from "../../../lib/types";
import { useParams } from "react-router-dom";
import { productService } from "../../../services/api";

const parseFilenames = (filenames: string): File[] => {
  return filenames.split(",").map((filename, index) => {
    const dummyContent = "Placeholder content for ${filename}";
    return new File([dummyContent], filename, { type: "image/jpeg" });
  });
};

export default function EditProducts() {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    if (productId !== undefined) {
      productService
        .getProductDetails(parseInt(productId, 10))
        .then((response) => setProduct(response.data.product))
        .catch((error) => console.error(error));
    }
  }, [productId]);

  const initialValues: ProductFormValues = {
    name: product ? product.name : "",
    description: product?.description ? product.description : "",
    price: product ? product.price : 0,
    discount: product?.discount ? product.discount : 0,
    images: product ? parseFilenames(product.images) : [],
    stock: product ? product.stock : 0,
    categoryId: product ? product.categoryId : 0,
    userId: product ? product.userId : 0,
    category: product ? product.category?.name : "",
    user: product ? product.user?.name : "",
  };

  console.log(product);

  return (
    <div>
      {product && <ProductFormContainer initialValues={initialValues} />}
    </div>
  );
}
