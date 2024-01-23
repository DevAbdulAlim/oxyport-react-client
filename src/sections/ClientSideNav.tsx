import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingBasket,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import Button from "../components/Button";

const ClientSideNavbar = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Check if the clicked element is not inside the navbar and the navbar is open
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        // Click occurred outside the navbar, close it
        handleClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleClick, isOpen]);

  // Close Nav
  if (!isOpen) {
    return null;
  }

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 right-0 z-30 w-full h-screen p-4 text-white bg-gray-800 shadow-2xl md:w-[400px]"
    >
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="text-2xl font-bold">
          <img src="/img/logo.png" alt="Logo" className="h-10 mr-2" />
        </Link>
        <Button variant="danger" onClick={handleClick}>
          X
        </Button>
      </div>

      <ul className="space-y-4 text-lg">
        <li className="transition duration-300 hover:text-yellow-500">
          <Link to="/" className="flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li className="transition duration-300 hover:text-yellow-500">
          <Link to="/categories" className="flex items-center">
            <FaShoppingBasket className="mr-2" />
            Categories
          </Link>
        </li>
        <li className="transition duration-300 hover:text-yellow-500">
          <Link to="/wishlist" className="flex items-center">
            <FaHeart className="mr-2" />
            Wishlist
          </Link>
        </li>
        <li className="transition duration-300 hover:text-yellow-500">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>
        </li>
        <li className="transition duration-300 hover:text-yellow-500">
          <Link to="/user" className="flex items-center">
            <FaUserCircle className="mr-2" />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ClientSideNavbar;
