import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './customHook/usefetch';

type Blog = {
  id: number;
  title: string;
  posted_by: string;
  time: string;
  social_image: string;
  category: string;
  language: string;
  published_at: string;
  post: string;  // Assuming this field contains the full content of the blog post
  description: string; // Add description field
  tags: string[]; // Add tags field (array of strings)
};

function BlogDetails() {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const { data: blogs, loading, error } = useFetch<Blog[]>("https://dev.to/api/articles");
  
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (blogs) {
      // Find the specific blog by ID
      const foundBlog = blogs.find((blog) => blog.id.toString() === id);
      setBlog(foundBlog || null);
    }
  }, [blogs, id]);

  if (loading) return <p className="text-center text-gray-700">Loading blog details...</p>;
  if (error) return <p className="text-center text-red-600">Error fetching blog: {error}</p>;

  // If no blog is found
  if (!blog) return <p className="text-center text-red-600">Blog not found</p>;

  return (
    <div className="w-4/5 mx-auto my-10 pb-10">
      <h1 className="font-bold text-4xl text-center text-gray-800 mb-6">{blog.title}</h1>

      {/* Blog Image */}
      <img className="w-full h-96 object-cover rounded-lg mb-6" src={blog.social_image} alt={blog.title} />

      {/* Blog Details */}
      <div className="text-center text-gray-600 mb-6">
        <p>By <span className="font-semibold">{blog.posted_by}</span> | {blog.time}</p>
        <p>Category: <span className="font-semibold">{blog.category}</span></p>
        <p>Language: <span className="font-semibold">{blog.language}</span></p>
        <p>Published on: <span className="font-semibold">{new Date(blog.published_at).toLocaleDateString()}</span></p>
      </div>

      {/* Blog Description */}
      <div className="mb-6">
        <h3 className="font-semibold text-xl text-gray-800">Description</h3>
        <p className="text-gray-700">{blog.description}</p>
      </div>

     

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-800">
        <p>{blog.post}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
