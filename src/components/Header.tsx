import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" flex fixed top-0  px-10 py-6 items-center z-50 justify-between bg-background w-full ">
      <div className="p-3 ml-3 tracking-widest  shadow-2xl font-bold text-xl text-white">
        D-TECH
        </div>

      <div className="  p-3 mx-10 justify-around  text-gray-200 mr-10 ">

      <Link className="transition hover:duration-700 ease-in-out text-lg ml-11 font-bold hover:text-slate-500  " to="/">
        Home
      </Link>
      <Link className="transition duration-700 ease-in-out  text-lg  ml-11 font-bold hover:text-slate-500 " to="/blogs">
        Blog
      </Link>
      <Link className="transition duration-700 ease-in-out  text-lg  ml-11 font-bold hover:text-slate-500 " to="/About">
        About
      </Link>
      <Link className="transition duration-700 ease-in-out  text-lg  ml-11 font-bold hover:text-slate-500 " to="/Contact">
        Contacts
      </Link>
     
      </div>
    </div>

  );
}

export default Header;
