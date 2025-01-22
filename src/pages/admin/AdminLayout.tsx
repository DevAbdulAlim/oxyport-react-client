// AdminLayout.tsx

import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminTopNavbar from "./AdminTopNavbar";
import { ToastContainer } from "react-toastify";

const AdminLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col h-screen text-green-900">
      <AdminSidebar open={open} handleNavToggle={handleNavToggle} />
      <div
        className={`flex-1 overflow-x-hidden overflow-y-auto ${
          open ? "xl:ml-64" : "xl:ml-16"
        } `}
      >
        <AdminTopNavbar handleNavToggle={handleNavToggle} />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
