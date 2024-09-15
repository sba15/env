
import React, { useState, useEffect, useRef } from 'react';
import sbalogo from "../../assets/images/sbalogo.svg";
import "./styles.scss";

const Navbar = ({ isTransparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`transition-all duration-300 ${isTransparent ? 'navbar-transparent' : 'navbar-solid'}`}>
      <nav className="flex flex-col md:flex-row items-center w-[92%] mx-auto py-4">
        <div className="flex w-full md:w-auto items-center">
          <img
            className="w-16 cursor-pointer"
            src={sbalogo}
            alt="Logo"
          />
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer md:hidden block"
          ></ion-icon>
        </div>
        <div className={`flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-end md:ml-auto md:gap-6`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500 transition duration-500 font-medium" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition duration-500 font-medium" href="#">
                Industries
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition duration-500 font-medium" href="#">
                Client stories
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition duration-500 font-medium" href="#">
                Resources
              </a>
            </li>
          </ul>
          <button className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707] mt-4 md:mt-0">
            Request a demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



