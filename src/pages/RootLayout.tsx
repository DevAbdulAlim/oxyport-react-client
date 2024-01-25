import React from "react";
import { Outlet } from "react-router-dom";
import MainTopNavbar from "../sections/MainTopNavbar";
import Footer from "../sections/footer";
import Copyright from "../sections/Copyright";
import ClientTopBar from "../sections/ClientTopBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientTopBar />
      <header className="sticky top-0 z-20">
        <MainTopNavbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
      <Copyright />
      <ToastContainer />
    </div>
  );
}
