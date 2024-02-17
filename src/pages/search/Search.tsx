import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../api/product";
import Loader from "../../components/ui/Loader";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import { MdSort } from "react-icons/md";
import SortProduct from "./SortProduct";
import PaginateProduct from "./PaginateProduct";
import { useCallback, useState } from "react";

const ProductSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState("name");

  const { data, isLoading, error } = useProducts({
    sortBy: sortBy,
    page: currentPage,
    pageSize: pageSize,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (data?.totalItems && data.totalItems <= 0) return <div>Not Found</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (values: { value: string; label: string }) => {
    setSortBy(values.value);
  };

  const handleCategoryChange = (categories: string[]) => {
    console.log(categories);
  };

  const handlePriceRangeChange = (values: number[]) => {
    console.log(values);
  };

  return (
    <div className="container px-3 mx-auto my-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* filters */}
        <div className="lg:col-span-1">
          {/* CategoryFilter and PriceRangeSlider components */}
          <CategoryFilter handleChange={handleCategoryChange} />
          <PriceRangeSlider onRangeChange={handlePriceRangeChange} />
        </div>
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between p-8 mb-8 bg-green-100 rounded-md">
            <div className="flex items-center">
              <PaginateProduct
                pageSize={pageSize}
                currentPage={currentPage}
                totalItems={data?.totalItems ? data.totalItems : 0}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="flex items-center text-lg">
              <MdSort className="mr-2 text-2xl" /> {/* sort icon */}
              <SortProduct handleChange={handleSortChange} />
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
