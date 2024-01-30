import ProductFormContainer from "../../../components/products/ProductForm";
import { ProductFormValues } from "../../../lib/types";

export default function CreateProducts() {
  const initialValues: ProductFormValues = {
    name: "",
    description: "hi",
    price: 0,
    discount: 0,
    images: [],
    stock: 0,
    categoryId: 1,
    userId: 2,
    category: "electronics",
    user: "admin",
  };

  return (
    <div className="px-3 py-12 md:px-6 xl:px-12">
      <ProductFormContainer initialValues={initialValues} edit={false} />
    </div>
  );
}
