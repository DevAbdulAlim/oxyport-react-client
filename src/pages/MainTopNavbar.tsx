import React, { useState } from "react";
import Link from "../components/ui/Link";
import { Link as RouterLink } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import ClientSideNavbar from "./ClientSideNav";
import CartSidebar from "./CartSidebar";
import CategoryDropdown from "./category/CategoryDropdown";
import { useCart } from "../context/CartContext";
import { BiSolidCategory } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

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
    e.stopPropagation();
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

  const { items } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <CartSidebar isOpen={isCartOpen} handleClick={handleCartToggle} />
      <ClientSideNavbar isOpen={isNavOpen} handleClick={handleNavToggle} />
      <nav className="p-4 bg-white">
        <div className="container flex items-center justify-between mx-auto space-x-2 md:space-x-5">
          {/* Logo on the left */}
          <RouterLink to="/" className="flex items-center">
            <FaLeaf className="mr-2 text-4xl text-green-500" />
            <span className="text-xl font-bold text-green-800">
              Organic Shop
            </span>
          </RouterLink>

          {/* Categories Button */}
          <div className="relative">
            <Button
              onClick={handleCategoryToggleButtonClick}
              variant="ghost"
              className="hidden text-xl text-green-900 md:flex"
            >
              <BiSolidCategory className="mx-2" />
              Categories
              <MdArrowDropDown className="mx-4" />
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
                className="w-full p-2 pl-10 border rounded-md"
              />
              <FaSearch className="absolute text-gray-500 top-3 left-3" />
            </div>
          </div>

          {/* Wishlist, Cart, Account, and Hamburger Icon on the right */}
          <div className="flex items-center space-x-2 md:space-x-10">
            <Link to="/" size="sm" variant="icon">
              <FaHeart />
            </Link>
            <Button
              className="relative"
              variant="icon"
              size="sm"
              onClick={handleCartToggleButtonClick}
            >
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute px-2 text-sm text-white bg-red-500 rounded-full -right-2 -top-2">
                  {totalItems}
                </span>
              )}
            </Button>
            <Link to="/user" size="sm" variant="icon">
              <FaUserCircle />
            </Link>
            <Button
              type="button"
              aria-label="navbar toggle"
              onClick={handleNavToggleButtonClick}
            >
              <FaBars />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
