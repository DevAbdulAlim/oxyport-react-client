import React from "react";
import Link from "../components/ui/Link";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

// Define the Post type
type PostType = {
  id: number;
  title: string;
  image: string; // URL to the image
  username: string;
  date: string; // Format: YYYY-MM-DD
  time: string; // Format: HH:mm
};

const RecentPosts: React.FC = () => {
  const posts: PostType[] = [
    {
      id: 1,
      title: "The Benefits of Organic Farming",
      image: "/img/recent-posts/1.jpg",
      username: "JohnDoe",
      date: "2024-01-15",
      time: "14:30",
    },
    {
      id: 2,
      title: "10 Easy Recipes with Organic Vegetables",
      image: "/img/recent-posts/2.png",
      username: "JaneDoe",
      date: "2024-01-14",
      time: "10:45",
    },
    {
      id: 3,
      title: "How to Start Your Own Organic Garden",
      image: "/img/recent-posts/3.jpg",
      username: "BobSmith",
      date: "2024-01-13",
      time: "18:15",
    },
  ];

  return (
    <div className="container py-16 mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-6">
        GreenMart News Insight
      </h2>
      <h3 className="text-3xl font-semibold text-center text-green-700 mb-10">
        Fresh News From Organic Farming
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative p-8 bg-white rounded-lg transition-all duration-300 ease-in-out hover:bg-green-50"
          >
            {/* New Post Badge */}
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              New
            </span>

            <div className="overflow-hidden rounded-md mb-4">
              <img
                src={process.env.PUBLIC_URL + post.image}
                alt={`${post.title}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-900 group-hover:text-green-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">
                <span>{post.date}</span> <span>{post.time}</span>
              </p>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Posted by {post.username}
            </p>

            {/* Updated "READ MORE" button with React Icon */}
            <Link
              to="/"
              variant="link"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              READ MORE
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
