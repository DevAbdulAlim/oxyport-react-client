import React from "react";
import Button from "../components/ui/Button";

interface Offer {
  id: number;
  productName: string;
  description: string;
  image: string;
  offer: string;
}

const SpecialEffectsSection: React.FC = () => {
  const offers: Offer[] = [
    {
      id: 1,
      productName: "Premium Organic Apples",
      description:
        "Handpicked organic apples, crisp and sweet. A natural treat packed with vitamins and antioxidants.",
      image: "/img/special-offer1.png",
      offer: "Buy 1 kg, Get 1 kg free",
    },
    {
      id: 2,
      productName: "Organic Health Basket",
      description:
        "A curated basket with a selection of the freshest organic products, including premium organic honey and vegetables.",
      image: "/img/special-offer2.png",
      offer: "20% off on all bulk purchases",
    },
    {
      id: 3,
      productName: "Fresh Organic Spinach",
      description:
        "Rich in iron and vitamins, our fresh spinach leaves are organically grown for superior taste and nutrition.",
      image: "/img/special-offer3.png",
      offer: "Buy 2 kg, Get 500g free",
    },
  ];

  return (
    <section className="px-4 py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          Exclusive Special Offers
        </h2>
        <p className="text-xl font-medium text-gray-700 mb-12">
          Discover our top-quality organic products, now with exclusive deals.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border-t-4 border-green-600 rounded-lg transition-all duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.productName}
                  className="object-cover w-full h-64 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-4 py-2 text-white bg-green-700 rounded-full font-semibold text-sm">
                  {offer.offer}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-900 mb-3">
                  {offer.productName}
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  {offer.description}
                </p>
                <Button className="bg-green-600 text-white py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialEffectsSection;
