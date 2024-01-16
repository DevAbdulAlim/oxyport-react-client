import React from "react";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="mb-4 text-3xl font-semibold">Special Offers</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Special Offer 1 */}
        <div
          className="p-6 bg-gray-300 bg-center bg-cover rounded-md shadow-md"
          style={{ backgroundImage: `url('/img/offers/special-offer-1.png')` }}
        >
          <h3 className="mb-2 text-xl font-semibold">Fruits & Vegetables</h3>
          <p className="mb-4 text-gray-600">Get Upto 35% Off</p>
          <Button>Shop Now</Button>
        </div>

        {/* Special Offer 2 */}
        <div
          className="p-6 bg-gray-300 bg-center bg-cover rounded-md shadow-md"
          style={{ backgroundImage: `url('/img/offers/special-offer-2.jpg')` }}
        >
          <h3 className="mb-2 text-xl font-semibold">Fresh Fruits</h3>
          <p className="mb-4 text-gray-600">Get Upto 40% Off</p>

          <Button>Shop Now</Button>
        </div>

        {/* Special Offer 3 */}
        <div
          className="p-6 bg-gray-300 bg-center bg-cover rounded-md shadow-md"
          style={{ backgroundImage: `url('/img/offers/special-offer-3.jpg')` }}
        >
          <h3 className="mb-2 text-xl font-semibold">Freshly Baked Buns</h3>
          <p className="mb-4 text-gray-600">Get Upto 30% Off</p>

          <Button>Shop Now</Button>
        </div>
        {/* Add more special offers as needed */}
      </div>
    </div>
  );
};

export default SpecialOffers;
