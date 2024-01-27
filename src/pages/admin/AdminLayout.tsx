// AdminLayout.tsx

import React, { useState } from "react";
import AdminSidebar from "../../sections/AdminSidebar";
import { Outlet } from "react-router-dom";
import Button from "../../components/Button";

const AdminLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col h-screen">
      <AdminSidebar open={open} handleNavToggle={handleNavToggle} />
      <div
        className={`flex-1 overflow-x-hidden overflow-y-auto ${
          open ? "xl:ml-64" : "xl:ml-16"
        } `}
      >
        <div className="flex justify-between py-4 mb-8 text-gray-800 bg-gray-200 shadow-md">
          <Button onClick={handleNavToggle} className="xl:hidden">
            Toggle
          </Button>
          TopBar
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
