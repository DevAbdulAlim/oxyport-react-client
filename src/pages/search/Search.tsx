import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../api/product";
import Loader from "../../components/ui/Loader";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import {
  MdOutlineArrowLeft,
  MdOutlineArrowRight,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdSort,
} from "react-icons/md";

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
    <div className="container px-3 mx-auto my-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* filters */}
        <div className="lg:col-span-1">
          {/* CategoryFilter and PriceRangeSlider components */}
          <CategoryFilter />
          <PriceRangeSlider onRangeChange={handlePriceRangeChange} />
        </div>
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between p-8 mb-8 bg-green-100 rounded-md">
            <div className="flex items-center">
              <span className="text-3xl">
                <MdOutlineChevronLeft /> {/* previous page */}
              </span>
              <span>Showing 1–16 of 66 results</span>
              <span className="text-3xl">
                <MdOutlineChevronRight /> {/* next page */}
              </span>
            </div>
            <div className="flex items-center text-lg">
              <MdSort className="mr-2" /> {/* sort icon */}
              Sort by
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* Render product cards */}
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
