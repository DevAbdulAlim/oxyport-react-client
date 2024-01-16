import React from "react";

const FeaturedCategories = () => {
  return (
    <section className="container py-20 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold ">Featured Categories</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md">
            <div className="flex justify-center overflow-hidden">
              <img
                src="/img/categories/tea.jpg"
                alt="Tea Category"
                className="object-cover mb-2 transition-all duration-300 rounded-md hover:scale-110 b-2"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Tea Category</h3>
            {/* Additional content or details about the category */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
