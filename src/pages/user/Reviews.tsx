import React, { useState } from "react";
import Button from "../../components/ui/Button";

interface Review {
  id: number;
  productId: number;
  productName: string;
  rating: number;
  comment: string;
}

const userReviews: Review[] = [
  {
    id: 1,
    productId: 101,
    productName: "Product A",
    rating: 4,
    comment: "Great product! Highly recommended.",
  },
  {
    id: 2,
    productId: 102,
    productName: "Product B",
    rating: 5,
    comment: "Excellent quality and fast delivery.",
  },
  {
    id: 3,
    productId: 103,
    productName: "Product C",
    rating: 3,
    comment: "Good product but a bit pricey.",
  },
];

const Reviews: React.FC = () => {
  const [editingReview, setEditingReview] = useState<Review | null>(null);

  const handleEditReview = (reviewId: number) => {
    const reviewToEdit = userReviews.find((review) => review.id === reviewId);
    setEditingReview(reviewToEdit || null);
  };

  const handleCloseModal = () => {
    setEditingReview(null);
  };

  const handleSaveReview = (editedReview: Review) => {
    // Implement your logic to save the edited review here
    console.log("Saving edited review:", editedReview);
    setEditingReview(null);
  };

  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">Your Reviews</h2>
      <div>
        {userReviews.map((review) => (
          <div
            key={review.id}
            className="p-4 mb-4 bg-white rounded-md shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-lg font-bold">{review.productName}</span>
                <span className="ml-2 text-gray-500">
                  Rating: {review.rating}/5
                </span>
              </div>
              <Button
                variant="ghost"
                onClick={() => handleEditReview(review.id)}
              >
                Edit
              </Button>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Edit Review Modal */}
      {editingReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-bold">Edit Review</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveReview(editingReview);
              }}
            >
              <div className="mb-4">
                <label htmlFor="editedRating" className="block mb-2 ">
                  Rating:
                </label>
                <input
                  type="number"
                  id="editedRating"
                  name="editedRating"
                  value={editingReview.rating}
                  onChange={(e) =>
                    setEditingReview({
                      ...editingReview,
                      rating: +e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editedComment" className="block mb-2 ">
                  Comment:
                </label>
                <textarea
                  id="editedComment"
                  name="editedComment"
                  value={editingReview.comment}
                  onChange={(e) =>
                    setEditingReview({
                      ...editingReview,
                      comment: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
