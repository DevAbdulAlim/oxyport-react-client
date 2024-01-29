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
    .required("Product images are required.")
    .min(1, "At least one image is required.")
    .of(
      yup.object().shape({
        type: yup.string().required(),
        name: yup.string().required(),
        // size: yup.number().max(1024 * 1024 * 10, "Image size should be less than 10 MB."),
      })
    ),
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

export { productSchema };
