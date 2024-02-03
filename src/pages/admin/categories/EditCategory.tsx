import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CategoryFormContainer from "./CategoryForm";
import { CategoryFormType } from "../../../lib/types";
import Button from "../../../components/ui/Button";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "../../../components/PrintComponent";
import Breadcrumb from "../../../components/Breadcrumb";
import { useCategoryById } from "../../../api/category";

const parseFilenames = (filenames: string): File[] => {
  return filenames.split(",").map((filename, index) => {
    const dummyContent = `Placeholder content for ${filename}`;
    return new File([dummyContent], filename, { type: "image/jpeg" });
  });
};

export default function EditCategory() {
  const { categoryId } = useParams();

  const { data: category, isLoading, error } = useCategoryById(categoryId!);

  const initialValues: CategoryFormType = {
    name: category ? category.name : "",
    description: category?.description || "",
    image: category && category.image ? parseFilenames(category.image) : [],
  };

  return (
    <div className="px-3 py-12 md:px-6 xl:px-12">
      <Breadcrumb />
      <div className="flex justify-between py-8">
        <h3 className="text-2xl font-semibold">Update Category</h3>
      </div>

      {/* Category edit form */}
      {category && categoryId && (
        <CategoryFormContainer
          initialValues={initialValues}
          edit={true}
          categoryId={categoryId}
        />
      )}
    </div>
  );
}
