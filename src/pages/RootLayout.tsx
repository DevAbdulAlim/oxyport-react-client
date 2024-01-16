import React from "react";
import { Outlet } from "react-router-dom";
import MainTopNavbar from "../components/MainTopNavbar";
import Footer from "../components/footer";
import Copyright from "../components/Copyright";
import RecentPosts from "../components/RecentPosts";
import Facts from "../components/Facts";

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
