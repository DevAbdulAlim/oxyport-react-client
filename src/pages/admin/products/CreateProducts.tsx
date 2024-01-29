import ProductFormContainer from "../../../components/products/ProductForm";
import { ProductFormValues } from "../../../lib/types";

export default function CreateProducts() {
  const initialValues: ProductFormValues = {
    name: "",
    description: "",
    price: 0,
    discount: 0,
    images: [],
    stock: 0,
    categoryId: 0,
    userId: 0,
    category: "",
    user: "",
  };

  return (
    <div className="px-4 py-12">
      <ProductFormContainer initialValues={initialValues} />
    </div>
  );
}
