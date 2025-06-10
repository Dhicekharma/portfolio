import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./components/BlogDetails";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="about" element={<About />} />
        
      </Routes>
      <Footer />
   
        
      
    </Router>
  );
}

export default App;
