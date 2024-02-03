import React, { useEffect, useRef } from "react";
import Link from "../../components/ui/Link";

const CategoryDropdown = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const dummyCategories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports & Outdoors",
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

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={categoryRef}>
      <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-md">
        {dummyCategories.map((category, index) => (
          <li key={index} className="p-1 cursor-pointer hover:bg-gray-200">
            <Link to="/search" variant="ghost">
              {" "}
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
