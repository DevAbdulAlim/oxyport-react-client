import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Validation Schema
const categorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
  description: yup.string().required("Description is required"),
  images: yup.array().of(yup.mixed()).nullable(),
});

const EditCategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const queryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    images: [],
  });

  // Query to fetch category data
  const {
    data: categoryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () =>
      axios
        .get(`/api/categories/${categoryId}`)
        .then((res) => res.data.category),
  });

  // Mutation to update category
  const updateCategoryMutation = useMutation({
    mutationFn: (formData: FormData) =>
      axios.put(`/api/categories/${categoryId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category", categoryId] });
      navigate("/admin/categories");
    },
    onError: (error) => {
      console.error("Error updating category:", error);
    },
  });

  useEffect(() => {
    if (categoryData) {
      setInitialValues({
        name: categoryData.name,
        description: categoryData.description,
        images: categoryData.image ? categoryData.image.split(",") : [],
      });
    }
  }, [categoryData]);

  // Formik setup
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: categorySchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);

        // Handle both existing and new images
        values.images.forEach((image: string | File) => {
          if (typeof image === "string") {
            formData.append("existingImages", image);
          } else {
            formData.append("newImages", image);
          }
        });

        // Trigger the mutation to update the category
        updateCategoryMutation.mutate(formData);
      } catch (error) {
        console.error("Error updating category:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading category data</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Category Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter category name"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <QuillEditor
            value={formik.values.description}
            onEditorChange={(content) =>
              formik.setFieldValue("description", content)
            }
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm">
              {formik.errors.description}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Images</label>
          <SelectImage
            defaultImages={formik.values.images}
            onImageUpload={(files) => formik.setFieldValue("images", files)}
            onImageState={(files) => formik.setFieldValue("images", files)}
          />
          {formik.touched.images && formik.errors.images && (
            <div className="text-red-500 text-sm">{formik.errors.images}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting || updateCategoryMutation.isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {formik.isSubmitting || updateCategoryMutation.isPending
            ? "Updating..."
            : "Update Category"}
        </button>
      </form>
    </div>
  );
};

export default EditCategoryPage;
