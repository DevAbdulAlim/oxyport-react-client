import React, { useState } from "react";
import { AiOutlineApple } from "react-icons/ai";
import {
  GiBroccoli,
  GiHerbsBundle,
  GiCoconuts,
  GiCarrot,
  GiBananaBunch,
  GiWatermelon,
  GiStrawberry,
  GiPineapple,
  GiTomato,
} from "react-icons/gi";

const categories = [
  { name: "Fruits", link: "/fruits", reactIcon: <AiOutlineApple /> },
  { name: "Vegetables", link: "/vegetables", reactIcon: <GiBroccoli /> },
  { name: "Herbs", link: "/herbs", reactIcon: <GiHerbsBundle /> },
  { name: "Nuts", link: "/nuts", reactIcon: <GiCoconuts /> },
  { name: "Carrots", link: "/carrots", reactIcon: <GiCarrot /> },
  { name: "Bananas", link: "/bananas", reactIcon: <GiBananaBunch /> },
  { name: "Watermelon", link: "/watermelon", reactIcon: <GiWatermelon /> },
  { name: "Strawberries", link: "/strawberries", reactIcon: <GiStrawberry /> },
  { name: "Pineapples", link: "/pineapples", reactIcon: <GiPineapple /> },
  { name: "Tomatoes", link: "/tomatoes", reactIcon: <GiTomato /> },
];

interface CategoryFilterProps {
  handleChange: (categories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ handleChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    handleChange(updatedCategories);
  };

  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-1">
            <button
              className={`flex items-center rounded-full px-3 py-1 ${
                selectedCategories.includes(category.name)
                  ? "bg-green-500 text-green-50"
                  : "bg-white text-green-900"
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <span className="text-2xl">{category.reactIcon}</span>
              <span className="ml-2">{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
