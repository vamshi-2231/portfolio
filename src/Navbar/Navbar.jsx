import React, { useState } from 'react';
import profile from '../img/vamshi.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex md:flex-row items-center justify-between md:justify-around font-bold text-white p-3 lg:sticky lg:top-0 z-30 shadow-sm shadow-slate-300 bg-slate-900">
      <div>
        <a href="./home" 
        >

          <img
            src={profile}
            alt="Logo"
            className="w-8 lg:w-12 ml-2 rounded-3xl shadow-sm shadow-teal-400"
          />
        </a>
      </div>

      <ul
        className={`bg-slate-900 duration-300 ease-in-out flex flex-col md:flex-row items-center justify-center xl:mr-8 absolute md:static h-[100vh] md:h-auto w-full md:w-auto left-0 ${menuOpen ? 'top-[7%]' : 'top-[-150%]'} z-50 uppercase md:bg-transparent max-sm:text-3xl`}
      >
        <li className="m-4 lg:mx-4 my-6 md:my-0 hover:scale-105 duration-300 hover:text-teal-400">
          <a href="/home">Home</a>
        </li>
        <li className="m-4 lg:mx-4 my-6 md:my-0 hover:scale-105 duration-300 hover:text-teal-400">
          <a href="#skills">Skills</a>
        </li>
        <li className="m-4 lg:mx-4 my-6 md:my-0 hover:scale-105 duration-300 hover:text-teal-400">
          <a href="#education">Education</a>
        </li>
        <li className="m-4 lg:mx-4 my-6 md:my-0 hover:scale-105 duration-300 hover:text-teal-400">
          <a href="#projects">Projects</a>
        </li>
        <li className="m-4 lg:mx-4 my-6 md:my-0 hover:scale-105 duration-300 hover:text-teal-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        className="md:hidden text-3xl cursor-pointer mx-8"
        onClick={handleToggleMenu}

      >
        {/* Displaying the combining tilde character */}
        <span className="flex items-center hover:text-teal-400">
          <span>&#9776;</span> 
           {/* This will show "A" with a tilde above it */}
          
        </span> 
      </div>
    </nav>
  );
}