import React from "react";
import {
  MdSearch,
  MdWork,
  MdNotifications,
  MdMessage,
  MdApps,
  MdWbSunny,
  MdPerson,
} from "react-icons/md";
import { BsActivity } from "react-icons/bs";
import Button from "../components/Button";
import { ImMenu } from "react-icons/im";

const AdminTopNavbar = ({
  handleNavToggle,
}: {
  handleNavToggle: () => void;
}) => {
  return (
    <div className="sticky top-0 flex items-center justify-between w-full p-4 text-gray-500 bg-gray-100 shadow-md">
      <Button className="xl:hidden" variant="ghost" onClick={handleNavToggle}>
        <ImMenu className="text-xl" />
      </Button>
      {/* Search */}
      <div className="items-center hidden xl:flex">
        <MdSearch className="mr-2 text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 text-gray-700 bg-gray-200 rounded focus:outline-none"
        />
      </div>
      {/* Icons */}
      <div className="flex items-center">
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <BsActivity />
        </span>
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <MdNotifications />
        </span>
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <MdMessage />
        </span>
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <MdApps />
        </span>
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <MdWbSunny />
        </span>
        <span className="mx-4 text-xl font-bold cursor-pointer">
          <MdPerson />
        </span>
      </div>
    </div>
  );
};

export default AdminTopNavbar;
