import React, { useState, useEffect } from "react";
import Home1 from "../../assets/videos/Home1.mp4";
import Home2 from "../../assets/videos/Home2.mp4";
import Home3 from "../../assets/videos/Home3.mp4";
import Home4 from "../../assets/videos/Home4.mp4";
import Home5 from "../../assets/videos/Home5.mp4";
import Home6 from "../../assets/videos/Home6.mp4";
import Home7 from "../../assets/images/Home7.jpg";
import "./style.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


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
      <section>
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


      <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-8 mb-10">
        <div className="flex justify-between items-start">
          {/* Left-aligned text */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Discover how businesses become more intelligent with SBA
            </h2>

          </div>

          {/* Right-aligned link */}
          <div className="w-1/2 text-right">
          <p className="text-lg text-gray-600 mb-6">
              IT teams and business functions of all sizes are leveraging our expertise to create value for themselves and their customers.
            </p>
            <a href="/customer-stories" className="text-lg">
              View customer stories →
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <h3 className="text-lg font-semibold text-center mb-4 init-red-bg1">Trusted by talented leaders at:</h3>
        
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7" />
              </svg>
            </div>
          }
        >
          {['/path/to/logo1.png', '/path/to/logo2.png', '/path/to/logo3.png'].map((logo, index) => (
            <div key={index} className="px-4">
              <img src={logo} alt={`Company logo ${index + 1}`} className="mx-auto h-16" />
            </div>
          ))}
        </Slider>
      </div>
    </div>


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
    </>
  );
};

export default Home;
