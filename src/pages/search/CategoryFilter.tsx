import React, { useState } from "react";
import { Link } from "react-router-dom";
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
