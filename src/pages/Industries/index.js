import React from "react";
import "./style.scss";
import Indus from "../../assets/videos/Industries.mp4";
import Industries1 from "../../assets/images/Industries1.jpg";
import Industries2 from "../../assets/images/Industries2.jpg";

const Industries = () => {
  return (
    <>
      <section>
        <div class="ai-green-Ins1">
          <div class="init-ai-sectionIns1">
            <div className="Ins1">Industries</div>
            <div class="init-red-bg px-5">
              Explore Industry-Specific Solutions
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Indus} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-0 text-left">
              <p className="text-xl md:text-2xl font-sans">
                We at SBA provide reliable IT services and security solutions
                for data centers, cloud, and information security practices that
                cater to:
              </p>
              <ul className="text-xl md:text-3xl pl-5 list-disc space-y-2 mt-9">
                <li>BFSI</li>
                <li>Manufacturing</li>
                <li>Media</li>
                <li>IT & ITES</li>
                <li>Healthcare</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries1} // Replace with actual image path
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise IT Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>BFSI</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  SBA offers end-to-end services for the BFSI industry,
                  including digital transformation, IT consulting,
                  cybersecurity, data analytics, and regulatory compliance
                </p>
                <p>
                  These solutions enhance operational efficiency, ensure data
                  security, and support seamless integration of advanced
                  technologies, helping financial institutions stay competitive
                  and compliant
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Manufacturing</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  In the rapidly evolving manufacturing sector, we offer
                  extensive IT services tailored for the manufacturing industry.
                  The offerings include cloud solutions, data center
                  modernization, information security, and managed services
                </p>
                <p>
                  We help optimize IT infrastructure, enhance cybersecurity, and
                  leverage technologies like IoT and data analytics to improve
                  operational efficiency and drive digital transformation
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
