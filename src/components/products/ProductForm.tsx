import { Formik, Form, useFormikContext } from "formik";
import QuillEditor from "../QuillEditor";
import SelectSearch, { Option } from "../SelectSearch";
import SelectImage from "../SelectImage";
import { ProductFormValues } from "../../lib/types";
import { productSchema } from "../../lib/yupSchema";
import Input from "../ui/Input";
import Button from "../ui/Button";
import axios from "axios";
import config from "../../config";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const ProductForm = ({ edit }: { edit: boolean }) => {
  // initial formik hook
  const { values, setFieldValue, handleBlur, handleChange, touched, errors } =
    useFormikContext<ProductFormValues>();

  // handle adding product image
  const handleImageUpload = (files: File[]) => {
    setFieldValue("images", files);
    console.log("Selected image is: ", files);
  };

  // handle adding product description
  const handleEditorChange = (content: string) => {
    setFieldValue("description", content);
    console.log("Description is: ", content);
  };

  // handle adding product category
  const handleCategorySelectChange = (value: Option | null) => {
    if (value) {
      setFieldValue("categoryId", value.value);
      console.log("Selected category is: ", value);
    }
  };

  // handle adding product user
  const handleUserSelectChange = (value: Option | null) => {
    if (value) {
      setFieldValue("userId", value.value);
      console.log("Selected user is: ", value);
    }
  };

  // persist image on adding new image
  const [images, setImages] = useState<File[]>(values.images);
  const updateImageState = (images: File[]) => {
    setImages(images);
  };

  return (
    <Form className="grid grid-cols-1 gap-8">
      <div>
        <label className="block mb-1">Product name:</label>
        <Input
          type="text"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name && (
          <div className="text-red-500">{errors.name}</div>
        )}
      </div>

      {/* Add product description */}
      <div className="mb-24 md:mb-16 h-72">
        <label className="block mb-1">Add product description:</label>
        <QuillEditor
          value={values.description}
          onEditorChange={handleEditorChange}
        />
        {touched.description && errors.description && (
          <div className="text-red-500">{errors.description}</div>
        )}
      </div>

      <div>
        <label className="block mb-1">Product price:</label>
        <Input
          type="number"
          name="price"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.price}
        />
        {touched.price && errors.price && (
          <div className="text-red-500">{errors.price}</div>
        )}
      </div>
      <div>
        <label className="block mb-1">Product discount:</label>
        <Input
          type="number"
          name="discount"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.discount}
        />
        {touched.discount && errors.discount && (
          <div className="text-red-500">{errors.discount}</div>
        )}
      </div>
      <div>
        <label className="block mb-1">Product stock:</label>
        <Input
          type="number"
          name="stock"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.stock}
        />
        {touched.stock && errors.stock && (
          <div className="text-red-500">{errors.stock}</div>
        )}
      </div>

      {/* Select product image */}
      <div>
        <label className="block mb-1">Select product images:</label>
        <SelectImage
          defaultImages={images}
          onImageUpload={handleImageUpload}
          onImageState={updateImageState}
        />
        {touched.images && errors.images && (
          <div>
            {typeof errors.images === "string" ? (
              <div className="text-red-500">{errors.images}</div>
            ) : (
              <div className="text-red-500">
                {JSON.stringify(errors.images)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Select product category */}
      <div>
        <label className="block mb-1">Select product category:</label>
        <SelectSearch
          value={{ value: values.categoryId, label: values.category }}
          handleSelectChange={handleCategorySelectChange}
          searchTerm="categories"
        />
        {touched.categoryId && errors.categoryId && (
          <div className="text-red-500">{errors.categoryId}</div>
        )}
      </div>

      <Button type="submit">Create Product</Button>
    </Form>
  );
};

const ProductFormContainer = ({
  edit,
  initialValues,
  productId,
}: {
  initialValues: ProductFormValues;
  edit: boolean;
  productId?: string;
}) => {
  const { state } = useAuth();

  const handleSubmit = async (
    values: ProductFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const updatedValues = {
        ...values,
        id: state.user?.id,
      };
      if (edit) {
        const response = await axios.put(
          `${config.apiBaseUrl}/products/${productId}`,
          updatedValues,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("updated successfully:", response.data);
      } else {
        const response = await axios.post(
          `${config.apiBaseUrl}/products`,
          updatedValues,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("added successfully:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={productSchema}
      onSubmit={handleSubmit}
    >
      <ProductForm edit={edit} />
    </Formik>
  );
};

export default ProductFormContainer;
