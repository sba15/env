import React from "react";
import Home19 from "../../assets/images/Home19.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="relative text-black py-12 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Home19})` }}
    >
      <div className="relative z-10 mx-9 grid grid-cols-2  md:grid-cols-6 lg:grid-cols-5 gap-8 px-2 sm:px-4 text-black">
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
        <div className="px-16">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-500">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#005eff", fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-red-500">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#ff0000", fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#005eff", fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#74C0FC", fontSize: "2rem" }} // Set fontSize here
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-8 px-2 sm:px-4 text-black">
        <div className="text-center md:text-left">
          <p className="text-sm">Phone: +91 9500262708</p>
          <p className="text-sm">Email: marketing@sbainfo.in</p>
        </div>
      </div>
      <div className="relative z-10 text-center mt-8 text-sm text-black px-2 sm:px-4">
        <p>&copy; 1996 - 2024, SBA Info Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
