import { FaDollarSign, FaGlobe, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

export default function ClientTopBar() {
  return (
    <div className="hidden px-6 py-2 text-white bg-green-700 md:block">
      <div className="container flex items-center justify-between mx-auto">
        {/* Phone and Address section */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-2 border-white">
              <FaPhoneAlt className="text-lg text-white" />
            </div>
            <p className="ml-2"> (02) 587 - 898 - 250</p>
          </div>
          <div className="flex items-center text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-2 border-white">
              <FaMapMarker className="text-lg text-white" />
            </div>
            <p className="ml-2">Favicon, New York, USA - 254230</p>
          </div>
        </div>

        {/* Language and Currency section */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-2 border-white">
              <FaGlobe className="text-lg text-white" />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-2 border-white">
              <FaDollarSign className="text-lg text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
