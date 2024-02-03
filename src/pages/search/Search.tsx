import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../api/product";
import Loader from "../../components/ui/Loader";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductSearch = () => {
  const { data, isLoading, error } = useProducts();

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePriceRangeChange = () => {};

  // If data is loaded successfully
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-8">
        {/* filters */}
        <div className="col-span-1">
          <CategoryFilter />
          <PriceRangeSlider onRangeChange={handlePriceRangeChange} />
          <BrandFilter />
        </div>
        <div className="col-span-3">
          <div className="flex justify-between p-8 mb-8 rounded-md shadow-md">
            <div>Showing 1–16 of 66 results</div>
            <div>Sort by</div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data?.products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
