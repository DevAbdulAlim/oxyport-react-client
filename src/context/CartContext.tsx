// CartContext.tsx
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

export interface CartContextValue extends CartState {
  dispatch: Dispatch<CartAction>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  handleIncrease: (item: CartItem) => void;
  handleDecrease: (itemId: number) => void;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number };

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialState: CartState = {
    items: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const handleIncrease = (itemId: number) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const handleDecrease = (itemId: number) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
  };

  const contextValue: CartContextValue = {
    ...state,
    dispatch,
    addToCart,
    removeFromCart,
    handleIncrease,
    handleDecrease,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    default:
      return state;
  }
};
