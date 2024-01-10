import { Product } from "../../lib/types";

export type ProductAction =
  | { type: "FETCH_PRODUCTS_REQUEST" }
  | {
      type: "FETCH_PRODUCTS_SUCCESS";
      payload: { products: Product[]; total: number };
    }
  | { type: "FETCH_PRODUCTS_FAILURE"; payload: string }
  | { type: "CREATE_PRODUCT_REQUEST" }
  | { type: "CREATE_PRODUCT_SUCCESS"; payload: Product }
  | { type: "CREATE_PRODUCT_FAILURE"; payload: string }
  | { type: "UPDATE_PRODUCT_REQUEST" }
  | { type: "UPDATE_PRODUCT_SUCCESS"; payload: Product }
  | { type: "UPDATE_PRODUCT_FAILURE"; payload: string }
  | { type: "DELETE_PRODUCT_REQUEST" }
  | { type: "DELETE_PRODUCT_SUCCESS"; payload: number }
  | { type: "DELETE_PRODUCT_FAILURE"; payload: string };

interface ProductState {
  products: Product[];
  total: number;
  loading: boolean;
  error: string | null;
}

const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        total: action.payload.total,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_PRODUCT_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
        error: null,
      };
    case "CREATE_PRODUCT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_PRODUCT_REQUEST":
      return { ...state, loading: true, error: null };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        error: null,
      };
    case "UPDATE_PRODUCT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_PRODUCT_REQUEST":
      return { ...state, loading: true, error: null };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        error: null,
      };
    case "DELETE_PRODUCT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
