import React from "react";
import { FaSeedling, FaWeight, FaUser, FaAward } from "react-icons/fa";

// Define the type for a fact
type FactType = {
  title: string;
  description: string;
  icon: React.ReactNode; // This will accept any valid React Node, including icons
};

const facts: FactType[] = [
  {
    title: "85k+",
    description: "Organic Products",
    icon: <FaSeedling className="text-6xl text-green-500" />,
  },
  {
    title: "80k+",
    description: "Metric to Supplied",
    icon: <FaWeight className="text-6xl text-green-500" />,
  },
  {
    title: "48k+",
    description: "Experienced Farmers",
    icon: <FaUser className="text-6xl text-green-500" />,
  },
  {
    title: "25k+",
    description: "Organic Awards",
    icon: <FaAward className="text-6xl text-green-500" />,
  },
];

// Define the type for the FactCard component props
interface FactCardProps {
  fact: FactType;
}

// FactCard component
const FactCard: React.FC<FactCardProps> = ({ fact }) => (
  <div className="flex flex-col items-center justify-center p-8 mb-6 bg-white rounded-lg transition-all duration-300 ease-in-out">
    <div className="flex items-center justify-center p-4 mb-4 bg-green-100 rounded-full">
      {fact.icon}
    </div>
    <p className="text-4xl font-semibold text-green-700">{fact.title}</p>
    <h3 className="text-lg font-medium text-gray-600 mt-2">
      {fact.description}
    </h3>
  </div>
);

// Facts component
const Facts: React.FC = () => {
  return (
    <section className="py-20 text-center bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-green-700 mb-12">
          Our Key Achievements
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <FactCard key={index} fact={fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
