import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/ui/Loader";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import { MdSort } from "react-icons/md";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import Sort from "../../components/Sort";
import { useQuery } from "@tanstack/react-query";

const ProductSearch: React.FC = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "name";
  const page = searchParams.get("page") || "1";
  const pageSize = parseInt(searchParams.get("pageSize") || "5");
  const categories = searchParams.getAll("categories").join(",") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "products",
      search,
      sortBy,
      page,
      pageSize,
      categories,
      minPrice,
      maxPrice,
    ],
    queryFn: async () => {
      const response = await axios.get("/api/products", {
        params: {
          search,
          sortBy,
          page,
          pageSize,
          categories,
          minPrice,
          maxPrice,
        },
      });
      return response.data;
    },
  });

  const totalItems = data?.totalItems || 0;

  return (
    <div className="container min-h-screen px-4 mx-auto my-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Filters
            </h3>
            <PriceRangeSlider />
            <CategoryFilter />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center justify-between bg-gradient-to-r from-green-500 via-teal-500 to-green-400 p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center space-x-4">
              <Search />
            </div>
            <div className="flex items-center text-lg">
              <MdSort className="mr-2 text-white text-2xl" />
              <Sort
                options={[
                  { value: "name", label: "Name" },
                  { value: "createdAt", label: "Created At" },
                ]}
              />
            </div>
          </div>

          <div className="mb-6">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <div className="text-red-500 text-center">
                Error: {error.message}
              </div>
            ) : totalItems === 0 ? (
              <div className="text-gray-500 text-center">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {data.products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

          <Pagination totalItems={totalItems} />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
