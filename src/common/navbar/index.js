
import React, { useState } from "react";
import sbalogo from "../../assets/images/sbalogo.svg";
import "./styles.scss";

const Navbar = ({ isTransparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`transition-all duration-300 ${
        isTransparent ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <nav className="flex flex-col md:flex-row items-center w-[92%] mx-auto py-4">
        {/* Logo section */}
        <div className="flex w-full md:w-auto items-center">
          <a href="/">
          <img className="w-16 cursor-pointer" src={sbalogo} alt="Logo"  />
          </a>
          <div className="block md:hidden ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
              viewBox="0 0 512 512"
              onClick={toggleMenu}
              fill="black" /* This will change the icon color to black */
              stroke="black" /* Ensures the stroke lines are also black */
            >
              <title>Menu</title>
              <path
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M88 152h336M88 256h336M88 360h336"
                className="ionicon-fill-none"
              />
            </svg>
          </div>
        </div>

        {/* Navigation links */}
        <div
          className={`flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:justify-end md:ml-auto md:gap-6`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8">
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                href="/ManagedService"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                href="/Industries"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                
              >
                Client stories
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500 font-medium"
                
              >
                Resources
              </a>
            </li>
          </ul>
          <button className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707] mt-4 md:mt-0">
           <a href="/ContactUs"> Request a demo</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
