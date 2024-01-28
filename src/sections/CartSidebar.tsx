import React, { useEffect, useRef } from "react";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import Link from "../components/ui/Link";

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
      className="fixed top-0 right-0 z-30 w-full h-screen p-4 text-gray-800 bg-white shadow-2xl md:w-[400px]"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
        <Button variant="danger" onClick={handleClick}>
          Close
        </Button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded shadow-md"
          >
            <div className="flex items-center">
              <img
                src="/img/products/product-10.png"
                className="w-12 h-12 mr-4"
                alt=""
              />
              <div>
                <p className="text-sm font-bold">{item.name}</p>
                <div className="flex">
                  <Button
                    size="sm"
                    disabled={!(item.quantity > 1)}
                    variant="secondary"
                    aria-label="decrease item"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </Button>

                  <p className="mx-2">{item.quantity}</p>

                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={!(item.quantity < item.stock)}
                    aria-label="increase item"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </Button>
                </div>
                <p>
                  <span>${item.price}</span>
                  <span className="font-semibold">x</span>
                  <span>{item.quantity}</span>
                  <span className="mx-2 font-bold">
                    ${item.quantity * item.price}
                  </span>
                </p>
              </div>
            </div>

            <Button
              variant="danger"
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(item.id);
              }}
            >
              X
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/cart">View Cart</Link>
        <Link to="/checkout" className="flex items-center">
          <span>Checkout</span>
          <p className="ml-2 font-bold">${calculateTotal()}</p>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
