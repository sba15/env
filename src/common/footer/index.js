
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 w-full">
      <div className="mx-9 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 px-2 sm:px-4">
        <div>
          <h6 className="font-bold mb-2">About Us</h6>
          <ul className="space-y-2">
            <li>SBA Info Solution</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Industries</h6>
          <ul className="space-y-2">
            <li>BFSI</li>
            <li>Manufacturing</li>
            <li>Media</li>
            <li>IT/ITES</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Resources</h6>
          <ul className="space-y-2">
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Solution</h6>
          <ul className="space-y-2">
            <li>Data and Analytics</li>
            <li>IT Modernization</li>
            <li>ML and Generation AI</li>
            <li>Managed Services</li>
            <li>Business Consulting</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Services</h6>
          <ul className="space-y-2">
            <li>Mailing and Collaboration</li>
            <li>Managed Services</li>
            <li>Cloud Services</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-2 sm:px-4">
        <div className="text-center md:text-left">
          <p className="text-sm">
            Phone: +91 44 24897598, +91 44 24894657
          </p>
          <p className="text-sm">
            Email: sales@sbainfo.in
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
          <a href="#" className="text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-red-500">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fas fa-phone-alt"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500 px-2 sm:px-4">
        <p>&copy; 1996 - 2024, SBA Info Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
