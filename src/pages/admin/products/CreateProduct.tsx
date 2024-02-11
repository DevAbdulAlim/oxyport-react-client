import Breadcrumb from "../../../components/Breadcrumb";
import ProductFormContainer from "./ProductForm";
import { ProductFormValues } from "../../../lib/types";

export default function CreateProducts() {
  const initialValues: ProductFormValues = {
    name: "Demo Product",
    description: "Demo Description",
    price: 500,
    discount: 10,
    images: [],
    stock: 1,
    categoryId: 1,
    userId: 0,
    category: "electronics",
    user: "admin",
  };

  return (
    <div className="px-3 py-12 md:px-6 xl:px-12">
      <Breadcrumb />
      <div className="flex justify-between py-8">
        <h3 className="text-2xl font-semibold">Create Product</h3>
      </div>
      <ProductFormContainer initialValues={initialValues} edit={false} />
    </div>
  );
}
