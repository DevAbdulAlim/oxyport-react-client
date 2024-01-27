import React, { useState, ChangeEvent, FormEvent } from "react";
import FileUpload from "./SelectImage";
import config from "../../../config";
import axios from "axios";
import MyQuillEditor from "./MyQuillEditor";

interface CategoryData {
  name: string;
  description: string;
  images: File[];
}

const CreateCategory: React.FC = () => {
  const [categoryData, setCategoryData] = useState<CategoryData>({
    name: "",
    description: "",
    images: [],
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditorChange = (content: string) => {
    setCategoryData((prevData) => ({
      ...prevData,
      description: content,
    }));
  };

  const handleImageUpload = (files: File[]) => {
    setCategoryData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", categoryData.name);
      formData.append("description", categoryData.description);

      categoryData.images.forEach((image, index) => {
        formData.append("images", image); // Use the same key for all images
      });

      const response = await axios.post(
        `${config.apiBaseUrl}/categories/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Category created successfully:", response.data);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h3 className="mb-4 text-2xl font-semibold">Create Category</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
            placeholder="Enter category name"
            required
            className="block w-full p-2 mt-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          {/* Use MyQuillEditor for description */}
          <div className="mt-2 mb-16 h-96">
            <MyQuillEditor onEditorChange={handleEditorChange} />
          </div>
        </div>
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Category Images:
          </label>
          <div className="mt-2 ">
            <FileUpload onFileUpload={handleImageUpload} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
