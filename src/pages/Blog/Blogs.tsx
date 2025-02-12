import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../components/customHook/usefetch";

type Blog = {
  id: number;
  title: string;
  posted_by: string;
  time: string;
  social_image: string; // Use social_image for the image source
  language: string; // Language field
  published_at: string; // Publish date field
};

function Blogs() {
  const navigate = useNavigate();
  const { data: blogs, loading, error } = useFetch<Blog[]>("https://dev.to/api/articles");
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  const [blogsToShow, setBlogsToShow] = useState<number>(10); // Number of blogs to show initially

  useEffect(() => {
    if (blogs) {
      setVisibleBlogs(blogs.slice(0, blogsToShow)); // Show the first batch of blogs
    }
  }, [blogs, blogsToShow]);

  if (loading) return <p className="text-center text-gray-700">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-600">Error fetching blogs: {error}</p>;

  // Check if `blogs` is not null or undefined before rendering
  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-700">No blogs available.</p>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const loadMoreBlogs = () => {
    setBlogsToShow((prev) => prev + 10); // Increase the number of blogs to show by 10
  };

  return (
    <div className="w-4/5 mx-auto my-10 pb-10">
      <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">Latest Blog Updates</h1>

      {/* Top Blogs Slider */}
      <Slider {...sliderSettings} className="mb-10">
        {visibleBlogs.slice(0, 5).map((blog) => (
          <div key={blog.id} className="relative cursor-pointer" onClick={() => navigate(`/blog/${blog.id}`)}>
            <img className="w-full h-96 object-cover rounded-lg" src={blog.social_image} alt={blog.title} />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-5 w-full">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-sm">{blog.posted_by} - {blog.time}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <img className="w-full h-48 object-cover" src={blog.social_image} alt={blog.title} />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.posted_by} - {blog.time}</p>
              
              {/* New Information Display */}
              <div className="text-gray-600 text-sm mt-4">
                <p>Language: {blog.language}</p>
                <p>Published on: {new Date(blog.published_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      {visibleBlogs.length < blogs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreBlogs}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            More Blogs →
          </button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
