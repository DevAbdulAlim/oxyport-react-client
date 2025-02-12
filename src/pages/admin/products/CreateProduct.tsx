import type React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";

// Validation Schema
const productSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  description: yup.string(),
  price: yup
    .number()
    .positive("Price must be positive")
    .required("Price is required"),
  discount: yup
    .number()
    .min(0, "Discount can't be negative")
    .max(100, "Discount can't exceed 100%"),
  stock: yup
    .number()
    .integer("Stock must be an integer")
    .min(0, "Stock can't be negative")
    .required("Stock is required"),
  images: yup.array().of(yup.mixed()).nullable(),
  categoryId: yup.number().required("Category is required"),
});

const initialValues = {
  name: "",
  description: "",
  price: 0,
  discount: 0,
  stock: 0,
  images: [],
  categoryId: "",
};

const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios.get("/api/categories").then((res) => res.data.categories),
  });

  // Define the mutation
  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/admin/products");
    },
    onError: (error) => {
      console.error("Error creating product:", error);
    },
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: productSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description || "");
        formData.append("price", values.price.toString());
        formData.append("discount", values.discount.toString());
        formData.append("stock", values.stock.toString());
        formData.append("categoryId", values.categoryId.toString());
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
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
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

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <div className="text-red-500 text-sm">{formik.errors.price}</div>
          )}
        </div>

        {/* Discount */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="discount">
            Discount (%)
          </label>
          <input
            id="discount"
            name="discount"
            type="number"
            step="0.1"
            placeholder="Enter discount"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.discount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.discount && formik.errors.discount && (
            <div className="text-red-500 text-sm">{formik.errors.discount}</div>
          )}
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="stock">
            Stock
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            placeholder="Enter stock quantity"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.stock && formik.errors.stock && (
            <div className="text-red-500 text-sm">{formik.errors.stock}</div>
          )}
        </div>

        {/* Category Selector */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="categoryId"
          >
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select a category</option>
            {categories?.map((category: { id: number; name: string }) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {formik.touched.categoryId && formik.errors.categoryId && (
            <div className="text-red-500 text-sm">
              {formik.errors.categoryId}
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
            : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
