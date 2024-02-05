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
  // Dummy data representing offers on organic fresh fruits and vegetables
  const offers: Offer[] = [
    {
      id: 1,
      productName: "Fresh Fruits",
      description:
        "Indulge in the juiciness of our handpicked, sweet and crisp apples from our organic orchard.",
      image: "/img/special-offer1.png",
      offer: "Buy 1 kg, Get 1 kg free",
    },
    {
      id: 2,
      productName: "Organic Delight Basket",
      description:
        "Experience the pure bliss of organic living with our special basket including fresh organic honey and a variety...",
      image: "/img/special-offer2.png",
      offer: "Special discount on bulk purchase",
    },
    {
      id: 3,
      productName: "Fresh Vegetables",
      description:
        "Fuel your body with the goodness of nutrient-rich spinach leaves grown organically in our greenhouse.",
      image: "/img/special-offer3.png",
      offer: "Special discount on bulk purchase",
    },
  ];

  return (
    <section className="px-3 py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="overflow-hidden bg-white border-2 border-green-900 rounded-lg shadow-md"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.productName}
                  className="object-cover w-full h-64"
                />
                <div className="absolute top-0 left-0 px-2 py-1 text-white bg-green-900 rounded-br-lg">
                  {offer.offer}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  {offer.productName}
                </h3>
                <p className="mb-4 text-gray-700">{offer.description}</p>
                <Button>Show Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialEffectsSection;
