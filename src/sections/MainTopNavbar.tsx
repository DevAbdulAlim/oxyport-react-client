import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaShoppingBasket,
  FaSignInAlt,
  FaUserPlus,
  FaPhoneAlt,
  FaMapMarker,
  FaGlobe,
  FaDollarSign,
} from "react-icons/fa";
import Button from "../components/Button";

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
  return (
    <>
      <TopBar />
      <nav className="p-4 bg-gray-100">
        <div className="container flex items-center justify-between mx-auto space-x-5">
          {/* Logo on the left */}
          <Link to="/" className="text-xl font-bold ">
            Your Logo
          </Link>

          {/* Categories Button */}
          <Button variant="ghost">
            <FaShoppingBasket className="mr-2" />
            Categories
          </Button>

          {/* Search box in the center */}
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 pl-10 border-none rounded-md"
              />
              <FaSearch className="absolute text-gray-500 top-3 left-3" />
            </div>
          </div>

          {/* Category links and buttons on the right */}
          <div className="flex items-center">
            <Link to="/cart" className="flex items-center mx-4 ">
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
            <Link to="/login" className="flex items-center mx-4 ">
              <FaSignInAlt className="mr-2" />
              Sign In
            </Link>
            <Link to="/register" className="flex items-center mx-4 ">
              <FaUserPlus className="mr-2" />
              Sign Up
            </Link>
            {/* Add more category links or buttons as needed */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
