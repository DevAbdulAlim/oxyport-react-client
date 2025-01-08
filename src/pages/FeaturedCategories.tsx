import React from "react";

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-green-900 mb-4">
          Featured Categories
        </h2>
        <p className="text-xl font-medium text-gray-700 mb-12">
          Explore our top organic product categories.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="p-4 bg-green-50 rounded-lg">
              <div className="flex justify-center overflow-hidden">
                <img
                  src="/img/categories/tea.jpg"
                  alt="Tea Category"
                  className="object-cover mb-2 transition-all duration-300 rounded-md hover:scale-110 border-2"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-green-800">
                Tea Category
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
