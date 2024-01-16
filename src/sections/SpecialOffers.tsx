import React from 'react';

const SpecialOffersSection = () => {
  const specialOffers = [
    {
      title: 'Limited Time Offer',
      description: 'Explore our exclusive collection with discounts up to 30%. Don\'t miss out!',
      image: 'https://placekitten.com/800/400', // Placeholder image URL
      link: '/shop/limited-offer',
    },
    {
      title: 'Free Gift with Purchase',
      description: 'Receive a free gift on orders over $50. Limited stock available!',
      image: 'https://placekitten.com/800/401', // Placeholder image URL
      link: '/shop/free-gift',
    },
    {
      title: 'Seasonal Clearance',
      description: 'Save on seasonal favorites! Enjoy up to 50% off on select items.',
      image: 'https://placekitten.com/800/402', // Placeholder image URL
      link: '/shop/seasonal-clearance',
    },
    // Add more special offers as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Discover Our Special Offers & Promotions
        </h2>

        <ul className="flex flex-col items-center space-y-8">
          {specialOffers.map((offer, index) => (
            <li key={index} className="flex flex-col items-center">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{offer.description}</p>
              <a
                href={offer.link}
                className="text-blue-500 hover:text-blue-700 font-semibold underline"
              >
                Explore Offer
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
