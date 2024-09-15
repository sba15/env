import React, { useState, useEffect } from "react";
import Home1 from "../../assets/videos/Home1.mp4";
import Home2 from "../../assets/videos/Home2.mp4";
import Home3 from "../../assets/videos/Home3.mp4";
import Home4 from "../../assets/videos/Home4.mp4";
import Home5 from "../../assets/videos/Home5.mp4";
import Home6 from "../../assets/videos/Home6.mp4";
import Home7 from "../../assets/images/Home7.jpg";
import Home9 from "../../assets/videos/Home9.mp4";
import Home11 from "../../assets/videos/Home11.mp4";
import Home13 from "../../assets/videos/Home13.mp4";
import Homeg3 from "../../assets/images/Homeg3.png";
import Homeg4 from "../../assets/images/Homeg4.png";
import Homeg5 from "../../assets/images/Homeg5.png";
import Homeg6 from "../../assets/images/Homeg6.png";
import Homeg7 from "../../assets/images/Homeg7.png";
import Homeg8 from "../../assets/images/Homeg8.png";
import Homeg9 from "../../assets/images/Homeg9.png";
import Homeg11 from "../../assets/images/Homeg11.png";
import Home15 from "../../assets/videos/Home15.mp4";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Checkmark } from "react-checkmark";

const Home = () => {
  const videos = [
    { video: Home1, text: "Empower Your Business with Trusted AI Solutions" },
    { video: Home2, text: "Innovate with AI-Powered Insights" },
    { video: Home3, text: "Unlock the Future with AI" },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setFadeIn(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <>
      {/* <section>
        <div className="ai-green-Home">
          <div className="init-ai-Home">
            <div>Empower Your Business with</div>
            <div className="init-red-bg px-5">
              {videos[currentVideoIndex].text}
            </div>
          </div>
          <div className={`video-container ${fadeIn ? "fade-in" : "fade-out"}`}>
            <video autoPlay muted loop key={currentVideoIndex}>
              <source src={videos[currentVideoIndex].video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section> */}

      <section>
        <div className="ai-green-Home">
          <div className="init-ai-Home">
            <div>Eliminate the </div>
            <div class="init-red-bg px-5">Mundane</div>
          </div>
          <video autoPlay muted loop>
            <source src={Home1} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="relative w-full h-screen">
          {/* Background Video */}
          <video className="absolute" autoPlay muted loop playsInline>
            <source src={Home13} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="relative z-10 flex items-center justify-between w-full h-full px-10 py-16">
            {/* Left Side - Large Heading */}
            <div className="w-[50%]">
              <h2 className="text-black font-bold text-4xl md:text-5xl mb-36 leading-tight">
                Enable people and organizations to achieve extraordinary
                outcomes, effortlessly.
              </h2>
            </div>

            {/* Right Side - Text and List */}
            <div className="w-[40%] bg-white p-6 rounded-md shadow-md">
              <h3 className="text-red-600 font-semibold text-xl mb-4">
                For data-driven enterprises looking to create exceptional
                customer and employee experience,
              </h3>
              <p className="text-gray-700 font-bold text-md mb-4">
                SBA provides modular and sustainable AI solutions that are:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Easy to adopt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Trusted, governed, secure, and ethical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                    Focused on augmenting human intelligence, not replacing it
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>Trained on your quality enterprise data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                    Transformative – Helping you gain a truly competitive edge
                    over the market
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-screen">
        {/* Background Video */}
        <video className="absolute" autoPlay muted loop playsInline>
          <source src={Home15} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Title */}
          <h2 className="text-white font-bold text-3xl md:text-5xl mb-10">
            Intelligent Solutions
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={Homeg7}
                alt="Infrastructure & Application Modernization"
                className="h-16 mb-4"
              />
              <h3 className="text-center text-black font-semibold text-lg">
                Infrastructure & Application Modernization
              </h3>
              <div className="border-t-4 border-red-600 w-full mt-4"></div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={Homeg8}
                alt="Cyber Resiliency"
                className="h-16 mb-4"
              />
              <h3 className="text-center text-black font-semibold text-lg">
                Cyber Resiliency
              </h3>
              <div className="border-t-4 border-red-600 w-full mt-4"></div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={Homeg9}
                alt="Data, Automation & AI"
                className="h-16 mb-4"
              />
              <h3 className="text-center text-black font-semibold text-lg">
                Data, Automation & AI
              </h3>
              <div className="border-t-4 border-red-600 w-full mt-4"></div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={Homeg11}
                alt="Managed Services"
                className="h-16 mb-4"
              />
              <h3 className="text-center text-black font-semibold text-lg">
                Managed Services
              </h3>
              <div className="border-t-4 border-red-600 w-full mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="relative w-full h-screen">
          <video autoPlay muted loop className="absolute ">
            <source src={Home11} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10  py-16 ml-[22%] w-[78%]">
            <h2 className="text-red-600 font-semibold text-2xl md:text-2xl mb-12">
              For core applications and domains of banking, insurance, and
              institutions
            </h2>
            <p className="text-black text-2xl md:text-2xl mb-12">
              We drastically simplify business and IT operations building{" "}
              <span className="font-bold">
                digital systems powered by AI, automation, and hybrid cloud
                infrastructure
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4">BFSI</h3>
                <img src={Homeg3} alt="BFSI" className="mx-auto" />
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4">Manufacturing</h3>
                <img src={Homeg4} alt="Manufacturing" className="mx-auto" />
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4">Media</h3>
                <img src={Homeg5} alt="Media" className="mx-auto" />
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4">IT/ITES</h3>
                <img src={Homeg6} alt="IT/ITES" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full h-screen overflow-hidden">
          <video autoPlay muted loop className="absolute ">
            <source src={Home9} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex items-center justify-between w-full h-full px-1">
            <div className=" bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
              <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                In the modern workplace,{" "}
                <span className="text-red-500">
                  repetitive tasks like data entry and information retrieval
                </span>{" "}
              </p>
              <p className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                hinder employees from engaging in strategic and creative aspects
                of their roles
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl px-4">
            The problem is not that computers will begin to think like men, It’s
            that men will begin to think like computers
          </p>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Home5} type="video/mp4" />
        </video>
      </section>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center">
          <div className="text-white px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Our mission
            </h1>
            <p className="mt-4 text-xl md:text-2xl init-red-bg1">
              At our core, we believe in empowering human potential through the
              responsible use of artificial intelligence and data-driven
              technologies.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-300">
              Ethically developed technologies can enhance human creativity,
              decision-making, and product experiences.
            </p>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Home6} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      </section>

      <section className="w-full bg-gray-50">
        <div className="py-10">
          <div className="mx-auto px-4 mb-10 max-w-screen-xl">
            <div className="flex justify-between items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Discover how businesses become more intelligent with SBA
                </h2>
              </div>

              <div className="w-full md:w-1/2 text-right">
                <p className="text-lg text-gray-600 mb-6">
                  IT teams and business functions of all sizes are leveraging
                  our expertise to create value for themselves and their
                  customers.
                </p>
                <a href="/customer-stories" className="text-lg">
                  View customer stories →
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto px-4 max-w-screen-xl">
            <h3 className="text-lg font-semibold text-center mb-4 init-red-bg1">
              Trusted by talented leaders at:
            </h3>

            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              nextArrow={
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
              prevArrow={
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              }
            >
              {[
                "/path/to/logo1.png",
                "/path/to/logo2.png",
                "/path/to/logo3.png",
              ].map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    className="mx-auto h-16"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-36"
        style={{ backgroundImage: `url(${Home7})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why work with us?
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-red-500">
            <h3 className="text-4xl font-bold mb-2">300+</h3>
            <p className="text-lg font-medium">Customers</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-blue-500">
            <h3 className="text-4xl font-bold mb-2">30+</h3>
            <p className="text-lg font-medium">Years in Market</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-red-500">
            <h3 className="text-4xl font-bold mb-2">Best</h3>
            <p className="text-lg font-medium">Predictive support</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-blue-500">
            <h3 className="text-4xl font-bold mb-2">ISO</h3>
            <p className="text-lg font-medium">
              Process Rigor & Certifications
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50">
        <div className="py-10">
          <div className="mx-auto px-4 mb-10 max-w-screen-xl">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">Our partner ecosystem</h2>
              <p className="text-lg text-gray-600 mb-6">
                Empowering our success through the collective strength and
                expertise of our partner network
              </p>
            </div>
          </div>

          <div className="mx-auto px-4 max-w-screen-xl text-center">
            <h3 className="text-lg font-semibold mb-4 init-red-bg1">
              Trusted by talented leaders at:
            </h3>

            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              nextArrow={
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
              prevArrow={
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              }
            >
              {[
                "/path/to/logo1.png",
                "/path/to/logo2.png",
                "/path/to/logo3.png",
              ].map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    className="mx-auto h-16"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div class="ai-green-vi">
          <div class="init-ai-section">
            <div>Resources</div>
          </div>
          <video autoPlay muted loop>
            <source src={Home4} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="w-full bg-gray-800 py-8">
        <div className="px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto bg-slate-800 p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-lg font-semibold text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Your Full Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Work Email Address"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-black"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-lg font-semibold text-black"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Company Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="support"
                className="block text-lg font-semibold text-black"
              >
                Support Required On
              </label>
              <select
                id="support"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
              >
                <option value="" disabled>
                  Choose a Solution/Service
                </option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="query"
                className="block text-lg font-semibold text-black"
              >
                Query
              </label>
              <textarea
                id="query"
                placeholder="Describe your Requirement in Detail"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-900"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
