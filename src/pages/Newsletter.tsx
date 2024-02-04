// NewsletterSection.tsx
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    console.log(`Subscribed with email: ${email}`);
    // You can make an API call or perform other actions based on your requirements
  };

  return (
    <div className="py-16 bg-white">
      <div className="container flex flex-col items-center mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-green-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-8 text-lg text-green-800">
          Stay updated with the latest news and promotions.
        </p>
        <div className="flex items-center max-w-md">
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button aria-label="sendEmail" onClick={handleSubscribe}>
            <FiMail />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
