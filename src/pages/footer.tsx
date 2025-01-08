import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 py-12 text-green-100 bg-green-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: About */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <FaLeaf className="mr-2 text-4xl text-green-500" />
            <span className="text-xl font-bold">GreenMart</span>
          </div>
          <p className="text-sm mb-4">
            At GreenMart, we believe in providing the freshest, most nutritious
            produce directly to your table. We partner with local farms and
            sustainable sources to bring you the best organic fruits,
            vegetables, and pantry essentials.
          </p>
          <p className="text-sm">
            Our mission is to make organic living accessible, affordable, and
            convenient for everyone. We are committed to supporting eco-friendly
            practices while delivering top-quality products.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:underline">About Us</li>
            <li className="mb-2 hover:underline">Wishlist</li>
            <li className="mb-2 hover:underline">Cart</li>
            <li className="mb-2 hover:underline">FAQ</li>
            <li className="mb-2 hover:underline">Blog</li>
            <li className="mb-2 hover:underline">Terms & Conditions</li>
            <li className="mb-2 hover:underline">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Categories</h3>
          <ul>
            <li className="mb-2 hover:underline">Fruits & Vegetables</li>
            <li className="mb-2 hover:underline">Organic Food</li>
            <li className="mb-2 hover:underline">Grocery & Staples</li>
            <li className="mb-2 hover:underline">Fresh Juices</li>
            <li className="mb-2 hover:underline">Snacks & Biscuits</li>
            <li className="mb-2 hover:underline">Dairy Products</li>
            <li className="mb-2 hover:underline">Beverages</li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <div className="flex items-center mb-2">
              <div className="flex justify-center items-center bg-green-500 bg-opacity-20 p-2 rounded-full">
                <FaPhoneAlt className="text-xl text-green-500" />
              </div>
              <p className="text-sm ml-3">+585 695 023 52</p>
            </div>
            <div className="flex items-center mb-2">
              <div className="flex justify-center items-center bg-green-500 bg-opacity-20 p-2 rounded-full">
                <FaEnvelope className="text-xl text-green-500" />
              </div>
              <p className="text-sm ml-3">info@example.com</p>
            </div>
            <div className="flex items-center mb-2">
              <div className="flex justify-center items-center bg-green-500 bg-opacity-20 p-2 rounded-full">
                <FaMapMarkerAlt className="text-xl text-green-500" />
              </div>
              <p className="text-sm ml-3">
                123 Organic St, Green City, Country
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-2xl text-white bg-blue-600 p-2 rounded-full hover:bg-green-500 transform hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-2xl text-white bg-blue-400 p-2 rounded-full hover:bg-green-500 transform hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-2xl text-white bg-pink-500 p-2 rounded-full hover:bg-green-500 transform hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-white bg-blue-700 p-2 rounded-full hover:bg-green-500 transform hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
