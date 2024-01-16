// AdminLayout.tsx

import React from 'react';
import AdminSidebar from '../../sections/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
    <AdminSidebar />
    <div className="flex-1 p-4 ml-64 overflow-x-hidden overflow-y-auto ">
     <Outlet />
    </div>
  </div>
  );
};

export default AdminLayout;
