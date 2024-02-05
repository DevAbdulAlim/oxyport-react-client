import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 py-12 text-green-100 bg-green-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: About Us */}
        <div className="flex flex-col ">
          <div className="flex items-center mb-4">
            <FaLeaf className="mr-2 text-4xl text-green-500" />
            <span className="text-xl font-bold ">Organic Shop</span>
          </div>
          <p className="mb-4 md:text-left">
            Sed perspiciatis unde omnis natus error voluptatem accusantium
            doloreque laudantium totam aperiam eaque ipsa quae ab illo inventore
          </p>
          <div className="flex flex-col mt-4">
            <div className="flex items-center ">
              <FaEnvelope className="mr-2 text-xl" />
              <p>Email: info@example.com</p>
            </div>
            <div className="flex items-center ">
              <FaClock className="mr-2 text-xl" />
              <p>Hours: Mon - Fri, 8:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              About Our Company
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Wishlist
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">Cart</li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Flash Offers
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Terms & Conditions
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Categories</h3>
          <ul>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Fruit & Vegetables
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Fresh Fruits
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Biscuits & Snacks
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Organic Food
            </li>
            <li className="mb-2 hover:underline hover:cursor-pointer">
              Grocery & Staples
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Contact</h3>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-xl" />
            <p>+585 695 023 52</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-xl" />
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
