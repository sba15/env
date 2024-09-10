import React from "react";
import "./style.scss";
import aboutUs from "../../assets/videos/aboutUs.mp4";
import about1 from "../../assets/images/about1.svg";
import about2 from "../../assets/images/about2.svg";
import s2 from "../../assets/images/s2.svg";

const AboutUs = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abus">About Us</div>
            <div class="init-red-bg px-5">
              Intelligent Solutions, Limitless Potential
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={aboutUs} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-0 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 justify-center items-center">
            <div className="md:w-1/3 w-full p-5 md:p-0">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={about1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:px-0 text-center">
              <h2 className="text-5xl font-bold mb-9">Why Choose Us?</h2>
              <p className="text-lg mb-9">
                SBA has 60+ partnerships with top OEMs, specializing in Next-Gen
                Information Security, Cloud Services, and Data Center
                Modernization.
              </p>
              <p className="text-lg">
                Our expertise spans BFSI, manufacturing, IT/ITES, with solutions
                architecture and consulting capabilities enhancing our AI
                Innovation Center and Managed security services.
              </p>
            </div>
          </div>
        </div>
      </section>

        <section>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4">
            <div className="md:w-1/3 w-full">
              <img
                src={about2}
                alt="Graphs and coins"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/3 w-full mt-4 md:mt-0 md:ml-6">
              <h2 className="font-bold text-xl mb-4 text-center md:text-left">
                Integrated Solutions
              </h2>
              <ul className="list-disc pl-5 mb-6">
                <li>
                  Observability, data management, analytics, and AI in one
                  platform
                </li>
                <li>
                  Industry-specific solutions for BFSI, media, manufacturing, and
                  IT
                </li>
              </ul>
              <h2 className="font-bold text-xl mb-4 text-center md:text-left">
                Commitment to Excellence
              </h2>
              <ul className="list-disc pl-5">
                <li>Data governance, security, and compliance ensured</li>
                <li>Responsible AI practices implemented</li>
              </ul>
            </div>
          </div>
        </section>
        
    </>
  );
};

export default AboutUs;
