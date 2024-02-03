import React, { useState } from "react";

const dummyCategories = [
  "Category A",
  "Category B",
  "Category C",
  "Category D",
];

const CategoryFilter: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">Category</h3>
      <ul>
        {dummyCategories.map((category, index) => (
          <li key={index} className="mb-1">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-blue-300 checked:border-transparent focus:outline-none"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className="ml-2">{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
