import ProductForm from "../../../components/products/ProductForm";
import { ProductFormValues } from "../../../lib/types";

export default function CreateProducts() {
  const initialValues: ProductFormValues = {
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0,
    categoryId: 0,
    userId: 0,
  };

  return (
    <div>
      <ProductForm defaultValue={initialValues} />
    </div>
  );
}
