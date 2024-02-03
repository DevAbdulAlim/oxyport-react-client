import React, { useState, useEffect, useRef } from "react";
import ProductFormContainer from "./ProductForm";
import { Product, ProductFormValues } from "../../../lib/types";
import { useParams } from "react-router-dom";
import { productService } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "../../../components/PrintComponent";
import Breadcrumb from "../../../components/Breadcrumb";

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

  // Export to PDF handler
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="px-3 py-12 md:px-6 xl:px-12">
      <Breadcrumb />
      <div className="flex justify-between py-8">
        <h3 className="text-2xl font-semibold">Update Product</h3>
        <Button onClick={handlePrint}>Print Content</Button>
      </div>

      {/* Product edit form */}
      {product && (
        <ProductFormContainer
          initialValues={initialValues}
          edit={true}
          productId={productId}
        />
      )}

      {/* Invisible print component */}
      <div ref={componentRef}>
        {product && <PrintComponent product={product} />}
      </div>
    </div>
  );
}
