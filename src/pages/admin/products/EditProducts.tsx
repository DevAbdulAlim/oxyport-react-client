import React, { useState, useEffect } from "react";
import ProductForm from "../../../components/products/ProductForm";
import { Product, ProductFormValues } from "../../../lib/types";
import { useParams } from "react-router-dom";
import { productService } from "../../../services/api";

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

  // const initialValues: ProductFormValues = {
  //   name: product ? product.name : "",
  //   description: product?.description ? product.description : "",
  //   price: product ? product.price : 0,
  //   images: product ? product.image : "",
  //   stock: product ? product.stock : 0,
  //   categoryId: product ? product.categoryId : 0,
  //   userId: product ? product.userId : 0,
  //   category: product ? product.category?.name : "",
  // };

  return (
    <div>
      {/* {product && <ProductForm defaultValue={initialValues} edit={true} />} */}
    </div>
  );
}
