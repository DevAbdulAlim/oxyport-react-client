import React from "react";
import { Outlet } from "react-router-dom";
import MainTopNavbar from "../sections/MainTopNavbar";
import Footer from "../sections/footer";
import Copyright from "../sections/Copyright";
import RecentPosts from "../sections/RecentPosts";
import Facts from "../sections/Facts";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <MainTopNavbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}
