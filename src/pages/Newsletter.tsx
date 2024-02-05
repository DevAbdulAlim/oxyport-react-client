import React from "react";
import Button from "../components/ui/Button";

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-6 bg-green-50 md:flex-row sm:p-8">
          <div className="flex items-center justify-center w-full mb-8 sm:w-1/2 sm:mb-0">
            <img
              src="./img/newsletter.jpg"
              alt="Newsletter"
              className="w-full rounded-lg max-h-86"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-6 sm:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6 text-center text-gray-700">
              Stay up to date with our latest news, articles, and promotions.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 mb-2 bg-white border border-gray-300 rounded-lg sm:mr-2 focus:outline-none"
                required
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
