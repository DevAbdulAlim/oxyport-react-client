import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainTopNavbar from "../sections/MainTopNavbar";
import Footer from "../sections/footer";
import Copyright from "../sections/Copyright";
import ClientTopBar from "../sections/ClientTopBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ClientTopBar />
      <header className={`sticky top-0 z-20 ${isSticky ? "shadow-md" : ""}`}>
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
