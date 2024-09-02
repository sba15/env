// import React, { useState } from 'react';
// import sbalogo from "../../assets/images/sbalogo.svg";
// import "./styles.scss";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
//       <header className="bg-white">
//         <nav className="flex justify-between items-center w-[92%] mx-auto">
//           <div>
//             <img
//               className="w-16 cursor-pointer"
//               src={sbalogo}
//               alt="Logo"
//             />
//           </div>
//           <div
//             className={`nav-links duration- 500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
//               isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
//             } md:w-auto w-full flex items-center px-5`}
//           >
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Industries
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Client stories
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Resources
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707]">
//               Request a demo
//             </button>
//             <ion-icon
//               onClick={toggleMenu}
//               name={isMenuOpen ? 'close' : 'menu'}
//               className="text-3xl cursor-pointer md:hidden"
//             ></ion-icon>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import sbalogo from "../../assets/images/sbalogo.svg";
// import "./styles.scss";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
//       <header className="bg-white h-[10vh] shadow-lg py-[15px]">
//         <nav className="flex justify-between items-center w-[92%] mx-auto">
//           <div>
//             <img
//               className="w-16 cursor-pointer"
//               src={sbalogo}
//               alt="Logo"
//             />
//           </div>
//           <div
//             className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
//               isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
//             } md:w-auto w-full flex items-center px-5`}
//           >
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//                Services
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//               Industries
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//               Client stories
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
//               Resources
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707]">
//              Request a demo
//             </button>
//             <ion-icon
//               onClick={toggleMenu}
//               name={isMenuOpen ? 'close' : 'menu'}
//               className="text-3xl cursor-pointer md:hidden"
//             ></ion-icon>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import sbalogo from "../../assets/images/sbalogo.svg";
import "./styles.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <header className="bg-white h-[10vh] shadow-lg py-[15px]">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src={sbalogo}
              alt="Logo"
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
                  Industries
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
                  Client stories
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 ml-[30px] transition duration-500 font-medium" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#ff0000] text-white px-5 py-2 rounded-full hover:bg-[#c00707]">
              Request a demo
            </button>
            {/* Hide the menu icon on medium and larger screens */}
            <ion-icon
              onClick={toggleMenu}
              name={isMenuOpen ? 'close' : 'menu'}
              className="text-3xl cursor-pointer md:hidden block"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
