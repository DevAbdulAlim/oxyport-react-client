import React, { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';
import productReducer, { ProductAction } from './reducers/productReducer'
import productService from '../services/productService';
import { Product } from '../lib/models';


interface ProductContextProps {
  children: ReactNode;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface ProductContextValue extends ProductState {
  dispatch: Dispatch<ProductAction>;
  createProduct: (productData: Product) => void;
  updateProduct: (productId: number, productData: Product) => void;
  deleteProduct: (productId: number) => void;
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined);

const ProductProvider: React.FC<ProductContextProps> = ({ children }) => {
  const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
      try {
        const products = await productService.getProducts();
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
      } catch (error: any) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
      }
    };

    fetchProducts();
  }, []);

  const createProduct = async (productData: Product) => {
    dispatch({ type: 'CREATE_PRODUCT_REQUEST' });
    try {
      const newProduct = await productService.createProduct(productData);
      dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: newProduct });
    } catch (error: any) {
      dispatch({ type: 'CREATE_PRODUCT_FAILURE', payload: error.message });
    }
  };

  const updateProduct = async (productId: number, productData: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });
    try {
      const updatedProduct = await productService.updateProduct(productId, productData);
      dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: updatedProduct });
    } catch (error: any) {
      dispatch({ type: 'UPDATE_PRODUCT_FAILURE', payload: error.message });
    }
  };

  const deleteProduct = async (productId: number) => {
    dispatch({ type: 'DELETE_PRODUCT_REQUEST' });
    try {
      await productService.deleteProduct(productId);
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: productId });
    } catch (error: any) {
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error.message });
    }
  };

  const contextValue: ProductContextValue = {
    ...state,
    dispatch,
    createProduct,
    updateProduct,
    deleteProduct,
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
