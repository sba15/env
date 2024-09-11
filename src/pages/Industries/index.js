import React from "react";
import "./style.scss";
import Indus from "../../assets/videos/Industries.mp4";
import Industries1 from "../../assets/images/Industries1.jpg";



const Industries = () => {
  return (
    <>
      <section>
        <div class="ai-green-Ins1">
          <div class="init-ai-sectionIns1">
            <div className="Ins1">Industries</div>
            <div class="init-red-bg px-5">
              Explore Industry-Specific Solutions and Insights
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Indus} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left font-sans">
                <p>
                  We at SBA provide reliable IT services and security solutions
                  for data centers, cloud, and information security practices
                  that cater to:
                </p>
              </ul>
              <ul className="Indusfirst">
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
                  src={Industries1}
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
