import React from "react";
import Link from "./Link";

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
      title: "Lorem Ipsum 1",
      image: "/img/recent-posts/news-thumb-03.jpg", // Example image URL
      username: "JohnDoe",
      date: "2024-01-15",
      time: "14:30",
    },
    {
      id: 2,
      title: "Lorem Ipsum 2",
      image: "/img/recent-posts/news-thumb-08.jpg", // Example image URL
      username: "JaneDoe",
      date: "2024-01-14",
      time: "10:45",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      image: "/img/recent-posts/news-thumb-09.jpg", // Example image URL
      username: "BobSmith",
      date: "2024-01-13",
      time: "18:15",
    },
  ];

  return (
    <div className="container py-12 mx-auto">
      <h2 className="font-bold text-center">News Insight</h2>
      <h3 className="mb-4 text-2xl font-bold text-center">News From Orgado</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 transition duration-300 bg-white rounded-md hover:shadow-lg"
          >
            <img
              src={process.env.PUBLIC_URL + post.image}
              alt={`Image for ${post.title}`}
              className="mb-2 rounded-md"
            />
            <div className="flex justify-between">
              <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
              <p>
                <span>{post.date}</span> <span>{post.time}</span>
              </p>
            </div>

            <p className="text-gray-600">Posted by {post.username}</p>

            <Link to="/" variant="link" className="p-0">
              READ MORE
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
