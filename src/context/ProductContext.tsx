import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";
import productReducer, { ProductAction } from "./reducers/productReducer";
import productService, { productParams } from "../services/productService";
import { Product, ProductFormValues } from "../lib/types";

interface ProductContextProps {
  children: ReactNode;
}

interface ProductState {
  products: Product[];
  total: number;
  loading: boolean;
  error: string | null;
}

export interface ProductContextValue extends ProductState {
  dispatch: Dispatch<ProductAction>;
  fetchProducts: (params: productParams) => void;
  createProduct: (productData: ProductFormValues) => void;
  updateProduct: (productId: number, productData: Product) => void;
  deleteProduct: (productId: number) => void;
}

const ProductContext = createContext<ProductContextValue | undefined>(
  undefined
);

export const ProductProvider: React.FC<ProductContextProps> = ({
  children,
}) => {
  const initialState: ProductState = {
    products: [],
    total: 0,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async (params: productParams) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const { products, total } = await productService.getProducts(params);
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: { products, total },
      });
    } catch (error: any) {
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
    }
  };

  const createProduct = async (productData: ProductFormValues) => {
    dispatch({ type: "CREATE_PRODUCT_REQUEST" });
    try {
      const newProduct = await productService.createProduct(productData);
      dispatch({ type: "CREATE_PRODUCT_SUCCESS", payload: newProduct });
    } catch (error: any) {
      dispatch({ type: "CREATE_PRODUCT_FAILURE", payload: error.message });
    }
  };

  const updateProduct = async (productId: number, productData: Product) => {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
    try {
      const updatedProduct = await productService.updateProduct(
        productId,
        productData
      );
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: updatedProduct });
    } catch (error: any) {
      dispatch({ type: "UPDATE_PRODUCT_FAILURE", payload: error.message });
    }
  };

  const deleteProduct = async (productId: number) => {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });
    try {
      await productService.deleteProduct(productId);
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: productId });
    } catch (error: any) {
      dispatch({ type: "DELETE_PRODUCT_FAILURE", payload: error.message });
    }
  };

  const contextValue: ProductContextValue = {
    ...state,
    dispatch,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextValue => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within an ProductProvider");
  }
  return context;
};
