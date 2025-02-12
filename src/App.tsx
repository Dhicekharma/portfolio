import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/contact/Contact";
import Projects from './pages/projects/Projects';
import Home from './pages/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Blogs from './pages/Blog/Blogs';
import BlogDetails from './components/BlogDetails';

function App() {  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="projects" element={<Projects />} /> 
        <Route path="contact" element={<Contact />} />   
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
