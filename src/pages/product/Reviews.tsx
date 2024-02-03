import React, { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import Button from "../../components/ui/Button";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

const Reviews: React.FC = () => {
  const [newReview, setNewReview] = useState<Review>({
    id: 0,
    user: "",
    rating: 0,
    comment: "",
  });
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      user: "John Doe",
      rating: 4,
      comment: "Great product, highly recommended!",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 5,
      comment: "Excellent quality and fast delivery.",
    },
    // Add more dummy reviews as needed
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = reviews.length + 1;
    setReviews((prevReviews) => [...prevReviews, { ...newReview, id }]);
    setNewReview({ id: 0, user: "", rating: 0, comment: "" });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="p-4 mb-4 bg-white border-b rounded-md">
          <div className="flex items-center mb-2">
            <FaUser className="mr-2 text-gray-500" />
            <span className="text-gray-700">{review.user}</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array.from({ length: review.rating }).map((_, index) => (
                <FaStar key={index} className="mr-1 text-yellow-500" />
              ))}
            </div>
            <span className="ml-2 text-gray-700">Rating: {review.rating}</span>
          </div>
          <p className="text-gray-800">{review.comment}</p>
        </div>
      ))}

      <Button>Load More</Button>
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Write a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="user" className="block font-semibold text-gray-700">
              Your Name:
            </label>
            <input
              type="text"
              name="user"
              id="user"
              value={newReview.user}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block font-semibold text-gray-700"
            >
              Rating:
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block font-semibold text-gray-700"
            >
              Your Review:
            </label>
            <textarea
              name="comment"
              id="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
