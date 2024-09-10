
//            <-change one - > 
// import React, { useState, useEffect } from 'react';
// import sbalogo from "../../assets/images/sbalogo.svg";
// import v2 from "../../assets/videos/v2.mp4"
// import "./styles.scss";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this line

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setIsScrolled(offset > window.innerHeight); // Change this value based on when you want the navbar to change
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="font-[Poppins]">
//       <header className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-white'}`}>
//         <nav className="flex justify-between items-center w-[92%] mx-auto py-[15px]">
//           <div>
//             <img
//               className="w-16 cursor-pointer"
//               src={sbalogo}
//               alt="Logo"
//             />
//           </div>
//           <div className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isScrolled ? 'top-0' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//                   Industries
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//                   Client stories
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//                   Resources
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className={`px-5 py-2 rounded-full ${isScrolled ? 'bg-[#ff0000] text-white hover:bg-[#c00707]' : 'bg-transparent text-white border-white border hover:bg-white hover:text-black'}`}>
//               Request a demo
//             </button>
//             {/* Menu icon for mobile view */}
//             <ion-icon
//               onClick={() => setIsMenuOpen(!isMenuOpen)} // Corrected this line
//               name={isMenuOpen ? 'close' : 'menu'} // Corrected this line
//               className="text-3xl cursor-pointer md:hidden block"
//             ></ion-icon>
//           </div>
//         </nav>
//       </header>
//       {/* Video Banner */}
//       <section className="h-screen relative">
//         <video className="w-full h-full object-cover" autoPlay muted loop>
//           <source src={v2} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-6xl font-bold">And elevate the Humane</h1>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Navbar;




// check 2
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
        {/* Logo always on the left side */}
        <div className="flex w-full md:w-auto items-center">
          <img
            className="w-16 cursor-pointer"
            src={sbalogo}
            alt="Logo"
          />
          {/* Hide the menu icon on medium and larger screens */}
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer md:hidden block"
          ></ion-icon>
        </div>
        {/* Navigation and button on the right side for medium and larger screens */}
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



