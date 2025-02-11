import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const CategoryFilter: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/categories");
      return Array.isArray(data.categories) ? data.categories : [];
    },
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = new Set(searchParams.getAll("categories"));

  const toggleCategory = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (selectedCategories.has(category)) {
      const updatedCategories = Array.from(selectedCategories).filter(
        (cat) => cat !== category
      );
      if (updatedCategories.length > 0) {
        newParams.set("categories", updatedCategories.join(","));
      } else {
        newParams.delete("categories");
      }
    } else {
      newParams.append("categories", category);
    }
    setSearchParams(newParams);
    navigate(`?${newParams.toString()}`); // Update URL with new params
  };

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Failed to load categories.</p>;

  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">Categories</h3>
      <ul>
        {categories.map((category: { name: string }, index: number) => (
          <li key={index} className="mb-1">
            <button
              className={`flex items-center rounded-full px-3 py-1 ${
                selectedCategories.has(category.name)
                  ? "bg-green-500 text-green-50"
                  : "bg-white text-green-900"
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <span className="ml-2">{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
