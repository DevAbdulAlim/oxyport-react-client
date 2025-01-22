import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CategoryDropdown = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const dummyCategories = [
    {
      name: "Fruits",
    },
    {
      name: "Vegetables",
    },
    {
      name: "Organic Products",
    },
    {
      name: "Dairy & Eggs",
    },
    {
      name: "Bakery",
    },
    {
      name: "Beverages",
    },
  ];

  const categoryRef = useRef<HTMLDivElement | null>(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        handleClick(); // Close the dropdown
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleClick]);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={categoryRef} className="relative">
      <ul className="absolute z-10 w-48 mt-2 bg-white border rounded-md shadow-md">
        {dummyCategories.map((category, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleClick} // Close the dropdown when clicked
          >
            <Link to={`/category/${category.name.toLowerCase()}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
