import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Validation Schema
const categorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
  description: yup.string().required("Description is required"),
  images: yup.array().of(yup.mixed()).nullable(),
});

const initialValues = {
  name: "",
  description: "",
  images: [],
};

const CreateCategoryPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Define the mutation outside onSubmit
  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/api/categories", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/admin/categories");
    },
    onError: (error) => {
      console.error("Error creating category:", error);
    },
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: categorySchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        values.images.forEach((image: File) =>
          formData.append("images", image)
        );

        // Call the mutation function
        mutation.mutate(formData);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Category</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Category Name */}
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

        {/* Description */}
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

        {/* Image Selector */}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting || mutation.isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {formik.isSubmitting || mutation.isPending
            ? "Creating..."
            : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategoryPage;
