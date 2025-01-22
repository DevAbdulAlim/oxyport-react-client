import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";
import { useNavigate } from "react-router-dom";

// Validation Schema
const categorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
  description: yup.string().required("Description is required"),
  images: yup.array().of(yup.mixed()).nullable(),
});

const CreateCategoryPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      values.images.forEach((image: File) => formData.append("images", image));

      const response = await axios.post("/api/categories", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Category created successfully:", response.data);

      navigate("/admin/categories");
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Category</h1>
      <Formik
        initialValues={{
          name: "",
          description: "",
          images: [],
        }}
        validationSchema={categorySchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched, isSubmitting }) => (
          <Form>
            {/* Category Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Category Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter category name"
                className="w-full px-4 py-2 border rounded-md"
              />
              {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
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
                value={values.description}
                onEditorChange={(content) =>
                  setFieldValue("description", content)
                }
              />
              {touched.description && errors.description && (
                <div className="text-red-500 text-sm">{errors.description}</div>
              )}
            </div>

            {/* Image Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Images</label>
              <SelectImage
                defaultImages={values.images}
                onImageUpload={(files) => setFieldValue("images", files)}
                onImageState={(files) => setFieldValue("images", files)}
              />
              {touched.images && errors.images && (
                <div className="text-red-500 text-sm">{errors.images}</div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {isSubmitting ? "Creating..." : "Create Category"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCategoryPage;
