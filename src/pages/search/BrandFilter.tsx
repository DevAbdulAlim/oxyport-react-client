import React from "react";

const dummyBrands = ["Brand A", "Brand B", "Brand C", "Brand D"];

const BrandFilter = () => {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">Brands</h3>
      <ul>
        {dummyBrands.map((brand, index) => (
          <li key={index} className="mb-1">
            <input type="checkbox" id={brand} name={brand} />
            <label htmlFor={brand} className="ml-1">
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
