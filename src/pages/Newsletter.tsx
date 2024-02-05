import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-12 bg-green-100 md:flex-row ">
          <div className="flex items-center justify-center w-full sm:w-1/2 ">
            <img
              src="./img/newsletter.png"
              alt="Newsletter"
              className="w-full rounded-lg max-h-96"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full p-12 px-6 sm:w-1/2">
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
              <Input type="email" placeholder="Your email address" required />
              <Button type="submit" className="w-full ml-2 sm:w-auto">
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
