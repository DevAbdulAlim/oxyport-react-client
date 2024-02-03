import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 py-12 bg-gray-100">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 2xl:grid-cols-4">
        {/* Column 1: About Us */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-4 text-3xl font-bold text-center md:text-left">
            LOGO
          </h1>
          <p className="text-sm text-center md:text-left">
            Sed perspiciatis unde omnis natus error voluptatem accusantium
            doloreque laudantium totam aperiam eaque ipsa quae ab illo inventore
          </p>
          <div className="flex flex-col items-center mt-4 md:items-start">
            <div className="flex items-center text-sm">
              <FaEnvelope className="mr-2" />
              <p>Email: Info@example.com</p>
            </div>
            <div className="flex items-center text-sm">
              <FaClock className="mr-2" />
              <p>Address: Favicon, New York, USA - 25423</p>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul>
            <li>About Our Company</li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Flash Offers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Categories</h3>
          <ul>
            <li>Fruit & Vegetables</li>
            <li>Fresh Fruits</li>
            <li>Biscuits & Snacks</li>
            <li>Organic Food</li>
            <li>Grocery & Staples</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
          <div className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 mb-2 text-white bg-gray-200 border-none rounded-md md:mb-0 focus:outline-none"
            />
            <button className="px-6 py-2 ml-0 text-gray-800 bg-white rounded-md md:ml-4">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col items-center mt-2 md:flex-row">
            <FaClock className="mr-2" />
            <p>8:30 AM - 9:30 PM</p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <FaPhoneAlt className="mr-2" />
            <p>+585 695 023 52</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
