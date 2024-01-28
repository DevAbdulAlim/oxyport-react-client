import React from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import QuillEditor from "../QuillEditor";
import SelectSearch, { Option } from "../SelectSearch";
import SelectImage from "../SelectImage";
import { ProductFormValues } from "../../lib/types";

const validationSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  image: Yup.array().min(1, "Image is required").required("Image is required"),
  categoryId: Yup.number()
    .required("Category is required")
    .min(1, "Category is required"),
});

const ProductForm = () => {
  const { values, setFieldValue, errors } =
    useFormikContext<ProductFormValues>();

  const handleEditorChange = (content: string) => {
    setFieldValue("description", content);
    console.log("Description is: ", content);
  };

  const handleCategorySelectChange = (value: Option | null) => {
    if (value) {
      setFieldValue("categoryId", value.value);
      console.log("Selected category is: ", value);
    }
  };

  const handleImageUpload = (files: File[]) => {
    setFieldValue("image", files);
    console.log("Selected image is: ", files);
  };

  return (
    <Form>
      <QuillEditor
        value={values.description}
        onEditorChange={handleEditorChange}
      />
      {errors.description && <div>{errors.description}</div>}

      <SelectImage onImageUpload={handleImageUpload} />
      {errors.image && (
        <div>
          {typeof errors.image === "string" ? (
            <div>{errors.image}</div>
          ) : (
            <div>{JSON.stringify(errors.image)}</div>
          )}
        </div>
      )}
      <SelectSearch
        value={{ value: values.categoryId, label: values.category }}
        handleSelectChange={handleCategorySelectChange}
        searchTerm="categories"
      />
      {errors.categoryId && <div>{errors.categoryId}</div>}

      <button type="submit">Submit</button>
    </Form>
  );
};

const ProductFormContainer = ({
  initialValues,
}: {
  initialValues: ProductFormValues;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form submitted with values:", values);
      }}
    >
      <ProductForm />
    </Formik>
  );
};

export default ProductFormContainer;
