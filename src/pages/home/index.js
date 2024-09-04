import React from "react";
import datapage from "../../assets/videos/datapage.mp4";
import "./style.scss";
import aili from "../../assets/images/ai-li.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import aiSectionImage from "../../assets/images/ai-section.svg";
import s1 from "../../assets/images/s1.svg";
import s3 from "../../assets/images/s3.svg";
import s4 from "../../assets/images/s4.svg";
import s2 from "../../assets/images/s2.svg";

const Home = () => {
  const features = [
    "Easy to adopt",
    "Trusted, governed, secure and ethical",
    "Focused on augmenting human intelligence, not replace it",
    "Trained on your quality enterprise data",
    "Transformative",
    "By helping you gain a truly competitive edge over the market",
  ];

  return (
    <>
      <div>
        <div class="ai-green-vi">
          <div class="init-ai-section">
            <div>Empower Your Business with</div>
            <div class="init-red-bg px-5">Trusted AI Solutions</div>
          </div>
          <video autoPlay muted loop>
            <source src={datapage} type="video/mp4" />
          </video>
        </div>
      </div>

      <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light md:w-10/12 w-full">
                For data-driven enterprises looking to create exceptional
                customer and employee experience,
              </p>
              <p className="text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
                SBA provides{" "}
                <span className="text-red-600 font-semibold">
                  modular and sustainable AI solutions
                </span>{" "}
                that are
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <img
                src={aiSectionImage}
                loading="lazy"
                alt="AI"
                className="h-[28rem] w-[22rem] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-[-1]">
          <img src={aiOrnamentImage} loading="lazy" alt="Ornament" />
        </div>
      </section>

      <section className="custom-container ai-section">
        <div className="relative px-12 md:px-25">
          <div className="flex flex-wrap justify-between mt-10">
            {features.map((text, index) => (
              <div
                key={index}
                className="w-full md:w-4/12 mb-4 flex items-center gap-6"
              >
                <div>
                  <img
                    className="ai-m"
                    src={aili}
                    loading="lazy"
                    alt="ornament"
                  />
                </div>
                <div className="ai-li-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="relative bg-white py-20">
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img
              src={aiOrnamentImage}
              loading="lazy"
              alt="ornament"
              className="h-full object-cover"
            />
          </div>

          <div className="relative px-5 max-w-screen-xl mx-auto">
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="custom-container mx-auto px-5 max-w-screen-xl">
          <div className="custom-card mb-5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="serviceAndSol_ImageBox">
                  <img
                    src={s1}
                    className="serviceAndSol_img object-cover"
                    loading="lazy"
                    alt="Data orchestration and Management"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="mb-md-5 mb-3 mt-md-0 mt-4 text-2xl font-bold">
                  Data orchestration and Management
                </h2>
                <ul className="serviceAndSol_liText list-disc pl-5">
                  <li>Database Consulting and management</li>
                  <li>Data fabric architecture for self service</li>
                  <li>Data warehousing, Data Lakes and Lakehouses</li>
                  <li>
                    Partner ecosystem services - Migration, administration,
                    performance tuning, security, and compliance services
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="custom-card mb-5">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="serviceAndSol_ImageBox">
                  <img
                    src={s2}
                    className="serviceAndSol_img object-cover"
                    loading="lazy"
                    alt="Business Intelligence & Analytics"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="mb-md-5 mb-3 mt-md-0 mt-4 text-2xl font-bold">
                  Business Intelligence & Analytics
                </h2>
                <ul className="serviceAndSol_liText list-disc pl-5">
                  <li>
                    Cognos Analytics for enterprise BI, reporting, and augmented
                    analytics with inbuilt AI
                  </li>
                  <li>
                    Integration with SAP Analytics Cloud, other BI tools, data
                    sources, and applications
                  </li>
                  <li>Custom report development and dashboard creation</li>
                  <li>Data modeling and ETL/ELT services</li>
                  <li>Training and enablement services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="custom-card mb-5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="serviceAndSol_ImageBox">
                  <img
                    src={s3}
                    className="serviceAndSol_img object-cover"
                    loading="lazy"
                    alt="Intelligent IT Automation"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="mb-md-5 mb-3 mt-md-0 mt-4 text-2xl font-bold">
                  Intelligent IT Automation
                </h2>
                <ul className="serviceAndSol_liText list-disc pl-5">
                  <li>
                    Enterprise Observability for application performance and
                    Infrastructure quality management
                  </li>
                  <li>AI powered Cloud and Finops</li>
                  <li>Incident management & sustainable IT</li>
                  <li>
                    ML services and ChatOps for streamlined IT service
                    management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="custom-card mb-5">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="serviceAndSol_ImageBox">
                  <img
                    src={s4}
                    className="serviceAndSol_img object-cover"
                    loading="lazy"
                    alt="Enterprise ML and Generative AI"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="mb-md-5 mb-3 mt-md-0 mt-4 text-2xl font-bold">
                  Enterprise ML and Generative AI
                </h2>
                <ul className="serviceAndSol_liText list-disc pl-5">
                  <li>Customer care and call center modernization</li>
                  <li>
                    Retrieval Augmented generation for knowledge self service
                  </li>
                  <li>Conversational AI and virtual assistant development</li>
                  <li>Development and deployment of ML models</li>
                  <li>Responsible AI and model governance consulting</li>
                  <li>Integration with enterprise systems and applications</li>
                  <li>Data preparation and feature engineering services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* 
      <div className="p-5 mb-5 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src={s1}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
                alt="Data Orchestration"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-0 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
              Data orchestration and Management
            </h2>
            <ul className="text-base pl-5 list-disc space-y-2 text-center md:text-left">
              <li>Database Consulting and management</li>
              <li>Data fabric architecture for self service</li>
              <li>Data warehousing, Data Lakes and Lakehouses</li>
              <li>
                Partner ecosystem services - Migration, administration,
                performance tuning, security and compliance services
              </li>
            </ul>
          </div>
        </div>
      </div> */}

{/* 
<div className="p-5 mb-5 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <div className="overflow-hidden rounded-lg">
            <img
              src={s1}
              className="w-100 h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
              alt="Data Orchestration"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-left">
            Data orchestration and Management
          </h2>
          <ul className="text-base pl-5 list-disc space-y-2 text-left">
            <li>Database Consulting and management</li>
            <li>Data fabric architecture for self service</li>
            <li>Data warehousing, Data Lakes and Lakehouses</li>
            <li>
              Partner ecosystem services - Migration, administration,
              performance tuning, security and compliance services
            </li>
          </ul>
        </div>
      </div>
    </div> */}

<div className="p-5 mb-5 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-lg w-11/12 md:w-full">
            <img
              src={s1}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
              alt="Data Orchestration"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-0 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-9 text-center md:text-left">
            Data orchestration and Management
          </h2>
          <ul className="text-base pl-5 list-disc space-y-2 text-center md:text-left">
            <li>Database Consulting and management</li>
            <li>Data fabric architecture for self service</li>
            <li>Data warehousing, Data Lakes and Lakehouses</li>
            <li>
              Partner ecosystem services - Migration, administration,
              performance tuning, security and compliance services
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
