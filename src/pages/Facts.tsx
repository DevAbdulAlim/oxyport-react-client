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
    icon: <FaSeedling className="text-5xl text-green-200" />,
  },
  {
    title: "80k+",
    description: "Metric to Supplied",
    icon: <FaWeight className="text-5xl text-green-200" />,
  },
  {
    title: "48k+",
    description: "Experienced Farmer",
    icon: <FaUser className="text-5xl text-green-200" />,
  },
  {
    title: "25k+",
    description: "Organic Awards",
    icon: <FaAward className="text-5xl text-green-200" />,
  },
];

// Define the type for the FactCard component props
interface FactCardProps {
  fact: FactType;
}

// FactCard component
const FactCard: React.FC<FactCardProps> = ({ fact }) => (
  <div className="flex flex-col items-center justify-center p-6 mb-4 rounded-lg hover:cursor-pointer hover:bg-green-800">
    {fact.icon}
    <p className="text-4xl font-bold text-green-200">{fact.title}</p>
    <h3 className="mb-2 text-lg font-semibold text-green-100">
      {fact.description}
    </h3>
  </div>
);

// Facts component
const Facts: React.FC = () => {
  return (
    <section className="py-20 text-center text-white bg-green-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <FactCard key={index} fact={fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
