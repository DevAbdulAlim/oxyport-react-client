import React, { useEffect, useRef } from "react";
import Button from "../components/Button";

const CartSidebar = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Check if the clicked element is not inside the navbar and the navbar is open
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node) &&
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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={cartRef}
      className="fixed top-0 right-0 z-30 w-full h-screen p-4 text-white bg-gray-800 shadow-2xl md:w-[400px]"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <Button variant="danger" onClick={handleClick}>
          X
        </Button>
        {/* Add a close button or icon if needed */}
      </div>

      {/* Add your cart items and details here */}
      <div className="mb-4">Cart Item 1</div>
      <div className="mb-4">Cart Item 2</div>
      {/* Add more cart items as needed */}

      <div className="mt-8">
        {/* Add total and checkout button */}
        <p className="text-xl font-bold">Total: $100</p>
        <button className="p-2 text-white bg-blue-500 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
