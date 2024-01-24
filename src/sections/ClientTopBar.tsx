import { FaDollarSign, FaGlobe, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

export default function ClientTopBar() {
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
}
