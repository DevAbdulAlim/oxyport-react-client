import { Formik, Form, useFormikContext } from "formik";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import axios from "axios";
import config from "../../../config/config";
import { useAuth } from "../../../context/AuthContext";
import { CategoryFormType } from "../../../lib/types";
import { categorySchema } from "../../../lib/yupSchema";
import QuillEditor from "../../../components/QuillEditor";
import SelectImage from "../../../components/SelectImage";
import { useState } from "react";

const CategoryForm = ({ edit }: { edit: boolean }) => {
  const { values, setFieldValue, handleBlur, handleChange, touched, errors } =
    useFormikContext<CategoryFormType>();

  // handle adding product description
  const handleEditorChange = (content: string) => {
    setFieldValue("description", content);
    console.log("Description is: ", content);
  };

  // handle adding product image
  const handleImageUpload = (files: File[]) => {
    setFieldValue("images", files);
    console.log("Selected image is: ", files);
  };

  // persist image on adding new image
  const [images, setImages] = useState<File[]>(values.image);
  const updateImageState = (images: File[]) => {
    setImages(images);
  };

  return (
    <Form className="grid grid-cols-1 gap-8">
      <div>
        <label className="block mb-1">Category name:</label>
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

      {/* Select product image */}
      <div>
        <label className="block mb-1">Select product images:</label>
        <SelectImage
          defaultImages={images}
          onImageUpload={handleImageUpload}
          onImageState={updateImageState}
        />
        {touched.image && errors.image && (
          <div>
            {typeof errors.image === "string" ? (
              <div className="text-red-500">{errors.image}</div>
            ) : (
              <div className="text-red-500">{JSON.stringify(errors.image)}</div>
            )}
          </div>
        )}
      </div>

      <Button type="submit">
        {edit ? "Update Category" : "Create Category"}
      </Button>
    </Form>
  );
};

const CategoryFormContainer = ({
  edit,
  initialValues,
  categoryId,
}: {
  initialValues: CategoryFormType;
  edit: boolean;
  categoryId?: string;
}) => {
  const { state } = useAuth();

  // form submit handler
  const handleSubmit = async (
    values: CategoryFormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const updatedValues = {
        ...values,
        userId: state.user?.id,
      };
      if (edit) {
        const response = await axios.put(
          `${config.apiBaseUrl}/categories/${categoryId}`,
          updatedValues
        );
        console.log("Updated successfully:", response.data);
      } else {
        const response = await axios.post(
          `${config.apiBaseUrl}/categories`,
          updatedValues
        );
        console.log("Added successfully:", response.data);
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
      validationSchema={categorySchema}
      onSubmit={handleSubmit}
    >
      <CategoryForm edit={edit} />
    </Formik>
  );
};

export default CategoryFormContainer;
