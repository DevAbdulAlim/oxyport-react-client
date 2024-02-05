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
import Button from "../../components/ui/Button";
import { ImMenu } from "react-icons/im";
import Avatar from "../../components/ui/Avater";

const AdminTopNavbar = ({
  handleNavToggle,
}: {
  handleNavToggle: () => void;
}) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between w-full p-4 text-green-900 bg-green-100 shadow-md">
      <Button className="xl:hidden" variant="ghost" onClick={handleNavToggle}>
        <ImMenu className="text-xl" />
      </Button>
      {/* Search */}
      <div className="items-center hidden xl:flex">
        <MdSearch className="mr-2 text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 text-green-700 bg-green-200 rounded focus:outline-none"
        />
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-10">
        <span className="text-xl font-bold cursor-pointer ">
          <BsActivity />
        </span>
        <span className="text-xl font-bold cursor-pointer ">
          <MdNotifications />
        </span>
        <span className="text-xl font-bold cursor-pointer ">
          <MdMessage />
        </span>
        <span className="text-xl font-bold cursor-pointer ">
          <MdApps />
        </span>
        <span className="text-xl font-bold cursor-pointer ">
          <MdWbSunny />
        </span>
        <span className="text-xl font-bold cursor-pointer ">
          <Avatar
            src={process.env.PUBLIC_URL + "/img/avatar.jpg"}
            alt="account"
          />
        </span>
      </div>
    </div>
  );
};

export default AdminTopNavbar;
