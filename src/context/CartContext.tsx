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
  }
  
  interface CartState {
    items: CartItem[];
  }
  
  export interface CartContextValue extends CartState {
    dispatch: Dispatch<CartAction>;
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
  }
  
  type CartAction =
    | { type: "ADD_TO_CART"; payload: CartItem }
    | { type: "REMOVE_FROM_CART"; payload: number };
  
  const CartContext = createContext<CartContextValue | undefined>(undefined);
  
  export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
  
    const contextValue: CartContextValue = {
      ...state,
      dispatch,
      addToCart,
      removeFromCart,
    };
  
    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
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
        return { ...state, items: [...state.items, action.payload] };
      case "REMOVE_FROM_CART":
        return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
      default:
        return state;
    }
  };
  