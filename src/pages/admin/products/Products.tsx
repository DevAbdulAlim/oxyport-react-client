import { useContext } from "react";
import ProductTable from "../../../components/products/ProductTable";
import { ProductContext } from "../../../context/ProductContext";

export default function Products() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return <div>Loading...</div>; // or handle the undefined case in another way
  }

// Destructure the properties you need
const { products, loading, error, deleteProduct } = productContext;

  const handleDelete = (productId: number) => {
    deleteProduct(productId);
  }
  

  return (
    <div>
        {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}
