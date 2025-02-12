import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./customHook/usefetch";

type Blog = {
  social_image: string; // Using social_image as the image URL
  title: string;
  posted_by: string;
  time: string;
  post: string; // Assuming this holds the blog content
  id: number;
};

function Blogs() {
  const navigate = useNavigate();
  const { data: blogs, loading, error } = useFetch<Blog[]>("https://dev.to/api/articles");
  const [randomBlogs, setRandomBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (blogs) {
      // Function to shuffle blogs and select a random 3
      const updateRandomBlogs = () => {
        const shuffled = [...blogs].sort(() => 0.5 - Math.random()).slice(0, 3);
        setRandomBlogs(shuffled);
      };

      // Update blogs initially
      updateRandomBlogs();

      // Set an interval to update blogs every hour (3600000ms)
      const intervalId = setInterval(updateRandomBlogs, 3600000);

      // Cleanup the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [blogs]);

  if (loading) return <p className="text-center text-gray-700">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-600">Error fetching blogs: {error}</p>;

  return (
    <div className="w-4/5 mx-auto my-10 pb-10">
      <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
        Latest Blog Updates
      </h1>
      
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {randomBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 cursor-pointer hover:shadow-xl"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            {/* Blog Image */}
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={blog.social_image} // Using social_image field for the image URL
              alt={blog.title}
            />
            <div className="p-5">
              {/* Blog Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
              
              {/* Blog Author and Time */}
              <p className="text-gray-600 text-sm mb-4">
                {blog.posted_by} - {blog.time}
              </p>
              
              {/* Blog Excerpt */}
              <p className="text-gray-700 text-sm line-clamp-3">{blog.post}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-8">
        <Link
         to="blogs"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          More Blogs →
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
