import React, { useEffect, useRef, useState } from "react";
import Link from "../../components/ui/Link";

const SubCategoryDropdown = ({
  subCategories,
  handleClick,
}: {
  subCategories: string[];
  handleClick: () => void;
}) => {
  return (
    <ul className="absolute top-0 hidden mt-0 bg-white border rounded-md shadow-md left-full group-hover:block">
      {subCategories.map((subcategory, index) => (
        <li
          key={index}
          className="p-1 cursor-pointer hover:bg-gray-200"
          onClick={handleClick}
        >
          <Link to="/search" variant="ghost">
            {subcategory}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const CategoryDropdown = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dummyCategories = [
    {
      name: "Electronics",
      subCategories: ["Mobiles", "Laptops", "Tablets"],
    },
    {
      name: "Clothing",
      subCategories: ["Men's Clothing", "Women's Clothing", "Kids' Clothing"],
    },
    // Add more categories as needed
  ];

  const categoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (categoryRef.current && isOpen) {
        handleClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleClick, isOpen]);

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={categoryRef}>
      <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-md">
        {dummyCategories.map((category, index) => (
          <li
            key={index}
            className="p-1 cursor-pointer hover:bg-gray-200 group"
            onMouseEnter={() => handleCategoryHover(category.name)}
            onMouseLeave={handleCategoryLeave}
          >
            <div>
              <Link to="/search" variant="ghost">
                {category.name}
              </Link>
            </div>
            {activeCategory === category.name && (
              <SubCategoryDropdown
                subCategories={category.subCategories}
                handleClick={handleClick}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
