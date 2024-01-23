import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaShoppingBasket,
  FaPhoneAlt,
  FaMapMarker,
  FaGlobe,
  FaDollarSign,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import Button from "../components/Button";
import ClientSideNavbar from "./ClientSideNav";
import CartSidebar from "./CartSidebar";
import CategoryDropdown from "./CategoryDropdown";

const TopBar = () => {
  return (
    <div className="py-2 bg-gray-200">
      <div className="container flex items-center justify-between mx-auto">
        {/* Phone and Address section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <p>(02) 587 - 898 - 250</p>
          </div>
          <div className="flex items-center">
            <FaMapMarker className="mr-2" />
            <p>Favicon, New York, USA - 254230</p>
          </div>
        </div>

        {/* Language and Currency selection */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaGlobe className="mr-2" />
            <select
              aria-label="select language"
              className="bg-transparent border-none"
            >
              <option value="en">English</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="mr-2" />
            <select
              aria-label="select currency"
              className="bg-transparent border-none"
            >
              <option value="usd">USD</option>
              {/* Add more currency options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleNavToggleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation(); // Prevent the click event from reaching parent elements
    handleNavToggle();
  };

  const handleCartToggleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    handleCartToggle();
  };

  const handleCategoryToggleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    handleCategoryToggle();
  };

  return (
    <>
      <TopBar />
      <CartSidebar isOpen={isCartOpen} handleClick={handleCartToggle} />
      <ClientSideNavbar isOpen={isNavOpen} handleClick={handleNavToggle} />
      <nav className="p-4 bg-gray-100">
        <div className="container flex items-center justify-between mx-auto space-x-5">
          {/* Logo on the left */}
          <Link to="/" className="text-xl font-bold ">
            <img src="/img/logo.png" alt="Logo" className="w-full h-8" />
          </Link>

          {/* Categories Button */}
          <div className="relative">
            <Button
              onClick={handleCategoryToggleButtonClick}
              variant="ghost"
              className="hidden text-xl md:flex"
            >
              <FaShoppingBasket className="mx-4" />
              Categories
            </Button>
            <CategoryDropdown
              isOpen={isCategoryOpen}
              handleClick={handleCategoryToggle}
            />
          </div>

          {/* Search box in the center */}
          <div className="flex-grow hidden md:block ">
            <div className="relative lg:mx-10">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 pl-10 border-none rounded-md"
              />
              <FaSearch className="absolute text-gray-500 top-3 left-3" />
            </div>
          </div>

          {/* Wishlist, Cart, Account, and Hamburger Icon on the right */}
          <div className="flex items-center space-x-10">
            <Link to="/" className="text-2xl text-gray-600">
              <FaShoppingBasket />
            </Link>
            <Button onClick={handleCartToggleButtonClick}>
              <FaShoppingCart />
            </Button>
            <Link to="/user" className="text-2xl text-gray-600">
              <FaUserCircle />
            </Link>
            <button
              type="button"
              aria-label="navbar toggle"
              onClick={handleNavToggleButtonClick}
            >
              <FaBars className="text-2xl text-gray-600 cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
