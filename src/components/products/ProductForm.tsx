import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { ProductFormValues } from "../../lib/types";

const ProductSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string(),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  image: Yup.string().required("Image URL is required"),
  stock: Yup.number()
    .required("Stock is required")
    .min(0, "Stock must be greater than or equal to 0"),
  categoryId: Yup.number().required("Category is required"),
  userId: Yup.number().required("User ID is required"),
});


const ProductForm = ({ defaultValue, edit }: { defaultValue: ProductFormValues, edit?: boolean }) => {

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Product Form</h1>
      <Formik
        initialValues={defaultValue}
        validationSchema={ProductSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <Field
              type="text"
              name="description"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price:
            </label>
            <Field
              type="number"
              name="price"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="price"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL:
            </label>
            <Field
              type="text"
              name="image"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="image"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-600"
            >
              Stock:
            </label>
            <Field
              type="number"
              name="stock"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="stock"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-600"
            >
              Category ID:
            </label>
            <Field
              type="number"
              name="categoryId"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="categoryId"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="userId"
              className="block text-sm font-medium text-gray-600"
            >
              User ID:
            </label>
            <Field
              type="number"
              name="userId"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <ErrorMessage
              name="userId"
              component="div"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <Button type="submit">{edit ? 'Update' : 'Create'}</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;
