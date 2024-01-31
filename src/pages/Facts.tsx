import React from "react";

// Define the type for a fact
type FactType = {
  title: string;
  description: string;
};

const facts: FactType[] = [
  { title: "85k+", description: "Organic Products" },
  { title: "80k+", description: "Metric to Supplied" },
  { title: "48k+", description: "Experienced Farmer" },
  { title: "25k+", description: "Organic Awards" },
];

// Define the type for the FactCard component props
interface FactCardProps {
  fact: FactType;
}

// FactCard component
const FactCard: React.FC<FactCardProps> = ({ fact }) => (
  <div className="p-6 mb-4">
    <p className="text-4xl font-bold">{fact.title}</p>
    <h3 className="mb-2 text-lg font-semibold">{fact.description}</h3>
  </div>
);

// Facts component
const Facts: React.FC = () => {
  return (
    <section className="py-20 text-center text-white bg-slate-400">
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
