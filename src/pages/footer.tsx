import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-green-100">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: About Us */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <FaLeaf className="mr-2 text-4xl text-green-500" />
            <span className="text-xl font-bold text-green-800">
              Organic Shop
            </span>
          </div>
          <p className="mb-4 text-green-900 md:text-left">
            Sed perspiciatis unde omnis natus error voluptatem accusantium
            doloreque laudantium totam aperiam eaque ipsa quae ab illo inventore
          </p>
          <div className="flex flex-col items-center mt-4 md:items-start">
            <div className="flex items-center text-green-900">
              <FaEnvelope className="mr-2 text-xl" />
              <p>Email: info@example.com</p>
            </div>
            <div className="flex items-center text-green-900">
              <FaClock className="mr-2 text-xl" />
              <p>Hours: Mon - Fri, 8:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-green-900">
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul>
            <li className="mb-2">About Our Company</li>
            <li className="mb-2">Wishlist</li>
            <li className="mb-2">Cart</li>
            <li className="mb-2">Flash Offers</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="text-green-900">
          <h3 className="mb-4 text-xl font-bold">Categories</h3>
          <ul>
            <li className="mb-2">Fruit & Vegetables</li>
            <li className="mb-2">Fresh Fruits</li>
            <li className="mb-2">Biscuits & Snacks</li>
            <li className="mb-2">Organic Food</li>
            <li className="mb-2">Grocery & Staples</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="text-green-900">
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
