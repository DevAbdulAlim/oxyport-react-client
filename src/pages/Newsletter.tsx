import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-12 md:space-y-0">
        <div className="relative flex items-center justify-center w-full sm:w-1/2">
          <img
            src="./img/newsletter.png"
            alt="Newsletter"
            className="w-full rounded-full max-h-96 object-cover transform hover:scale-105 transition duration-300 ease-in-out "
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 px-6 space-y-6 text-center bg-white rounded-lg">
          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-green-900 leading-tight mb-6">
            Stay Ahead with GreenMart News!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Subscribe now to receive the freshest updates on organic products,
            exciting offers, and eco-friendly living straight to your inbox from
            GreenMart.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full"
          >
            {/* Input Field */}
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="p-4 rounded-lg w-full sm:w-80 text-lg border-2 outline-none border-green-300 focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out hover:shadow-lg transform hover:scale-105"
            />

            {/* Button */}
            <Button
              type="submit"
              className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
            >
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
