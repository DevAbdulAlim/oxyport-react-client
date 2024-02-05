import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingBasket,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaLeaf,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import Link from "../components/ui/Link";
import {
  GiBroccoli,
  GiHerbsBundle,
  GiCoconuts,
  GiCarrot,
  GiBananaBunch,
  GiWatermelon,
  GiStrawberry,
  GiPineapple,
  GiTomato,
} from "react-icons/gi";
import { AiOutlineApple } from "react-icons/ai";
import Input from "../components/ui/Input";

const categories = [
  { name: "Fruits", link: "/fruits", reactIcon: <AiOutlineApple /> },
  { name: "Vegetables", link: "/vegetables", reactIcon: <GiBroccoli /> },
  { name: "Herbs", link: "/herbs", reactIcon: <GiHerbsBundle /> },
  { name: "Nuts", link: "/nuts", reactIcon: <GiCoconuts /> },
  { name: "Carrots", link: "/carrots", reactIcon: <GiCarrot /> },
  { name: "Bananas", link: "/bananas", reactIcon: <GiBananaBunch /> },
  { name: "Watermelon", link: "/watermelon", reactIcon: <GiWatermelon /> },
  { name: "Strawberries", link: "/strawberries", reactIcon: <GiStrawberry /> },
  { name: "Pineapples", link: "/pineapples", reactIcon: <GiPineapple /> },
  { name: "Tomatoes", link: "/tomatoes", reactIcon: <GiTomato /> },
];

const ClientSideNavbar = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Check if the clicked element is not inside the navbar and the navbar is open
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        // Click occurred outside the navbar, close it
        handleClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleClick, isOpen]);

  // Close Nav
  if (!isOpen) {
    return null;
  }

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 right-0 z-30 w-full h-screen p-4 text-white bg-green-800 shadow-2xl md:w-[400px]"
    >
      <div className="flex items-center justify-between mb-4">
        <RouterLink to="/" className="flex items-center">
          <FaLeaf className="mr-2 text-4xl text-green-500" />
          <span className="text-xl font-bold text-green-100">Organic Shop</span>
        </RouterLink>
        <Button onClick={handleClick}>X</Button>
      </div>

      <div className="flex justify-center py-2 space-x-2 text-lg border-b">
        <Link
          to="/"
          className="flex items-center justify-center text-2xl"
          variant="ghost"
        >
          <FaHome />
        </Link>

        <Link
          to="/wishlist"
          className="flex items-center justify-center text-2xl"
          variant="ghost"
        >
          <FaHeart />
        </Link>

        <Link
          to="/cart"
          className="flex items-center justify-center text-2xl"
          variant="ghost"
        >
          <FaShoppingCart />
        </Link>

        <Link
          to="/user"
          className="flex items-center justify-center text-2xl"
          variant="ghost"
        >
          <FaUserCircle />
        </Link>
      </div>

      <ul className="py-8">
        {categories.map((item, index) => (
          <li
            className="transition duration-300 hover:text-yellow-500"
            key={index}
          >
            <Link to={item.link} variant="link">
              <span className="mr-2 text-3xl"> {item.reactIcon}</span>
              <span className="text-lg"> {item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ClientSideNavbar;
