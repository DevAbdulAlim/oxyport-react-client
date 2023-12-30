import ProductList from "./components/products/ProductList";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ProductList />
    </ProductProvider>
   
  )
}