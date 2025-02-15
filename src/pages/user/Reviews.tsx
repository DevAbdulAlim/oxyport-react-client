import type React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Star, User, Calendar } from "lucide-react";

interface Review {
  id: number;
  text: string;
  rating: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
}

const fetchReviews = async (): Promise<Review[]> => {
  const { data } = await axios.get<Review[]>("/api/reviews");
  return data;
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const UserReviewList: React.FC = () => {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">
          {" "}
          Unable to load reviews. Please try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Customer Reviews
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <StarRating rating={review.rating} />
                <p className="text-sm text-gray-600 mt-1">
                  Product ID: {review.productId}
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(review.createdAt).toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Anonymous User</span>
              </div>
              <span>ID: {review.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviewList;
