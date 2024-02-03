import Breadcrumb from "../../../components/Breadcrumb";
import { CategoryFormType } from "../../../lib/types";
import CategoryFormContainer from "./CategoryForm";

export default function CreateCategories() {
  const initialValues: CategoryFormType = {
    name: "",
    description: "",
    image: [],
  };

  return (
    <div className="px-3 py-12 md:px-6 xl:px-12">
      <Breadcrumb />
      <div className="flex justify-between py-8">
        <h3 className="text-2xl font-semibold">Create Product</h3>
      </div>
      <CategoryFormContainer initialValues={initialValues} edit={false} />
    </div>
  );
}
