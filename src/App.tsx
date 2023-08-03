import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
        <Header/>
    <Routes>

        <Route path="/" element={<Home/>}/>  
        <Route path="projects" element={<Projects />} /> 
        <Route path="contact" element={<Contact />} />   
    </Routes>
        <Footer/>
  </Router>
  );
}

export default App;
