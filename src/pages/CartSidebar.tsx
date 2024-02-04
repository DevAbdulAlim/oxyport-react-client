import React, { useEffect, useRef } from "react";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import Link from "../components/ui/Link";
import { FaMinusCircle, FaPlusCircle, FaWindowClose } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiSolidShow } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";

const CartSidebar = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  const { items, handleIncrease, handleDecrease, removeFromCart } = useCart();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
      className="fixed flex flex-col top-0 right-0 z-30 w-full h-screen  text-green-900 bg-white shadow-2xl md:w-[400px]"
    >
      <div className="flex flex-col items-center justify-center p-1 mb-8 text-center text-white bg-green-900 group hover:bg-red-500">
        <h2 className="text-xl font-bold group-hover:hidden">Shopping Cart</h2>
        <button
          aria-label="close"
          type="button"
          className="hidden text-xl group-hover:block"
          onClick={handleClick}
        >
          Close
        </button>
      </div>

      <div className="overflow-auto grow">
        <div className="grid grid-cols-1 gap-4 p-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between p-4 border rounded"
            >
              <div className="flex items-center">
                <img
                  src="/img/products/product-10.png"
                  className="w-12 h-12 mr-4"
                  alt=""
                />
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-l-md"
                      disabled={!(item.quantity > 1)}
                      onClick={() => handleDecrease(item.productId)}
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-r-md"
                      disabled={!(item.quantity < item.stock)}
                      onClick={() => handleIncrease(item.productId)}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <span className="font-semibold">${item.price}</span>
                    <span className="mx-2 font-semibold">x</span>
                    <span className="font-semibold">{item.quantity}</span>
                    <span className="mx-2 font-semibold">
                      ${item.quantity * item.price}
                    </span>
                  </p>
                </div>
              </div>
              <Button
                variant="delete"
                aria-label="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.productId);
                }}
              >
                <MdDelete />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 mt-8 ">
        <Link to="/cart" className="flex items-center w-full mb-4">
          <BiSolidShow className="mr-2 text-xl" />
          View Cart
        </Link>
        <Link to="/checkout" variant="danger" className="flex items-center">
          <IoBagCheckOutline className="mr-2 text-xl" />
          <span>Checkout</span>
          <p className="ml-2 font-bold">${calculateTotal()}</p>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
