import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex fixed top-0 left-0 px-6 py-6 items-center h-[50px] z-50 justify-between bg-background w-full shadow-lg">
      {/* Logo */}
      <div className="p-3 tracking-widest font-bold text-xl text-white">
        D-TECH
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <img src="icons/hamburger.png" alt="Menu" className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex p-3 mx-10 justify-around text-gray-200">
        <Link className="transition duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500" to="/">
          Home
        </Link>
        <Link className="transition duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500" to="/Blog">
          Blog
        </Link>
        <Link className="transition duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500" to="/About">
          About
        </Link>
        <Link className="transition duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500" to="/footer">
          Contacts
        </Link>
        <Link className="transition duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500" to="/Projects">
          Projects
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className=" fixed top-0 right-0 w-[50%]  bg-background bg-opacity-80 rounded-xl shadow-2xl   text-gray-200 flex flex-col  p-4 md:hidden">
          <Link
            className="transition  duration-700 ease-in-out text-lg mb-4 font-bold hover:text-slate-500"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="transition duration-700 ease-in-out text-lg mb-4 font-bold hover:text-slate-500"
            to="/Blog"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            className="transition duration-700 ease-in-out text-lg mb-4 font-bold hover:text-slate-500"
            to="/About"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="transition duration-700 ease-in-out text-lg mb-4 font-bold hover:text-slate-500"
            to="/footer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacts
          </Link>
          <Link
            className="transition duration-700 ease-in-out text-lg mb-4 font-bold hover:text-slate-500"
            to="/Projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
