"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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

const EditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const queryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    stock: 0,
    images: [],
    categoryId: "",
  });

  // Query to fetch product data
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () =>
      axios.get(`/api/products/${productId}`).then((res) => res.data.product),
  });

  // Query to fetch categories
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios.get("/api/categories").then((res) => res.data.categories),
  });

  // Mutation to update product
  const updateProductMutation = useMutation({
    mutationFn: (formData: FormData) =>
      axios.put(`/api/products/${productId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      navigate("/admin/products");
    },
    onError: (error) => {
      console.error("Error updating product:", error);
    },
  });

  useEffect(() => {
    if (productData) {
      setInitialValues({
        name: productData.name,
        description: productData.description || "",
        price: productData.price,
        discount: productData.discount,
        stock: productData.stock,
        images: productData.images ? productData.images.split(",") : [],
        categoryId: productData.categoryId,
      });
    }
  }, [productData]);

  // Formik setup
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: productSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("price", values.price.toString());
        formData.append("discount", values.discount.toString());
        formData.append("stock", values.stock.toString());
        formData.append("categoryId", values.categoryId.toString());

        // Handle both existing and new images
        values.images.forEach((image: string | File) => {
          if (typeof image === "string") {
            formData.append("existingImages", image);
          } else {
            formData.append("newImages", image);
          }
        });

        // Trigger the mutation to update the product
        updateProductMutation.mutate(formData);
      } catch (error) {
        console.error("Error updating product:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <form onSubmit={formik.handleSubmit}>
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
          disabled={formik.isSubmitting || updateProductMutation.isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {formik.isSubmitting || updateProductMutation.isPending
            ? "Updating..."
            : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
