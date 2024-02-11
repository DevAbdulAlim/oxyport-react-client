import React, { useRef } from "react";
import ProductFormContainer from "./ProductForm";
import { ProductFormValues } from "../../../lib/types";
import { useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "../../../components/PrintComponent";
import Breadcrumb from "../../../components/Breadcrumb";
import { useProductById } from "../../../api/product";
import ErrorPage from "../../../components/ErrorPage";

const parseFilenames = (filenames: string): File[] => {
  return filenames.split(",").map((filename, index) => {
    const dummyContent = `Placeholder content for ${filename}`;
    return new File([dummyContent], filename, { type: "image/jpeg" });
  });
};

export default function EditProducts() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProductById(productId!);

  // Export to PDF handler
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage message={error.message} />;

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
