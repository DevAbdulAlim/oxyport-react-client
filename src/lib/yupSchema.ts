import * as yup from "yup";

const productSchema = yup.object().shape({
  name: yup.string().required("Product name is required."),
  description: yup.string().required("Product description is required."),
  price: yup
    .number()
    .required("Price is required.")
    .positive("Price must be a positive number."),
  discount: yup
    .number()
    .required("Discount is required.")
    .min(0, "Discount must be a non-negative number."),
  images: yup
    .array()
    .min(1, "At least one image is required.")
    .required("Product images are required.")
    .of(yup.string().required()),
  stock: yup
    .number()
    .required("Stock quantity is required.")
    .integer("Stock must be an integer.")
    .min(1, "Stock quantity must be non-negative."),
  categoryId: yup
    .number()
    .required("Category ID is required.")
    .integer("Category ID must be an integer.")
    .positive("Category ID must be a positive number."),
  userId: yup
    .number()
    .required("User ID is required.")
    .integer("User ID must be an integer.")
    .positive("User ID must be a positive number."),
});

const categorySchema = yup.object().shape({
  id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  image: yup
    .array()
    .of(
      yup.object().shape({
        path: yup.string().required("Image path is required"),
      })
    )
    .required("At least one image is required"),
});

export { categorySchema, productSchema };
