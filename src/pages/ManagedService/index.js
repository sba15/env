import React from "react";
import "./style.scss";
import ManagedServices from "../../assets/videos/ManagedServices.mp4";
import ManagedService1 from "../../assets/images/Manageservice1.jpg";

const ManagedService = () => {
  return (
    <>
      <section>
        <div class="ai-green-mas">
          <div class="init-ai-sectionmas1">
            <div className="mas">Managed Services</div>
            <div class="init-red-bg px-5">
              Enhance your IT operations, focus on core business
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={ManagedServices} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Managed Security Services</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  SBA Info's Managed Services offer 24/7 proactive IT monitoring
                  and maintenance, including security, cloud management, and
                  communication support
                </p>
                <p>
                  These services enhance efficiency and uptime, allowing
                  businesses to focus on core operations while ensuring
                  compliance with data protection standards{" "}
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={ManagedService1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
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
                Cloud Zimbra Suite meets today's business needs by enabling seamless collaboration, real-time access, and robust security
                </p>
                <p>
                It enhances productivity with secure, anytime/anywhere access, and advanced data protection, providing a future-proof solution for smarter work
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

    </>
  );
};

export default ManagedService;
