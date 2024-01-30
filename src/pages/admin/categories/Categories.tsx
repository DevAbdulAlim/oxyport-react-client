import { useEffect, useRef, useState } from "react";

import PrintComponent from "../../../components/PrintComponent";
import { useReactToPrint } from "react-to-print";
import { categoryService } from "../../../services/api";
import { Category } from "../../../lib/types";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    categoryService
      .getCategories()
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
      });
  }, []);

  const handleSelect = (selectedCategory: string) => {
    // Handle the selected category here
    console.log("Selected category:", selectedCategory);

    // Trigger a new fetch when a category is selected
    setSelectedCategory(selectedCategory);
  };

  const handleFileUpload = (file: File) => {
    // Handle the uploaded file, e.g., send it to a server, process it, etc.
    console.log("Uploaded file:", file);
  };

  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <h2>Categories</h2>

      {/* <SelectImage onFileUpload={handleFileUpload} /> */}

      <br />
      {/* Button to trigger printing */}
      <button onClick={handlePrint} className="print:hidden">
        Print Content
      </button>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
