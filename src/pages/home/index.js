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
import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/ind_3.png";
import ind4 from "../../assets/images/ind_4.png";
import ind5 from "../../assets/images/ind_5.png";
import { FaLongArrowAltRight } from "react-icons/fa";


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
      <section>
        <div class="ai-green-vi">
          <div class="init-ai-section">
            <div>Empower Your Business with</div>
            <div class="init-red-bg px-5">Trusted AI Solutions</div>
          </div>
          <video autoPlay muted loop>
            <source src={datapage} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light md:w-10/12 w-full">
                For data driven enterprises looking to create exceptional
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
              className="h-full object-cover transform scale-x-[-1]"
            />
          </div>
          <div className="relative px-5 max-w-screen-xl mx-auto">
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                Data Orchestration and Management
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>Database Consulting and Management</li>
                <li>Data Fabric Architecture for Self-Service</li>
                <li>Data Warehousing, Data Lakes, and Lakehouses</li>
                <li>
                  Partner Ecosystem Services - Migration, Administration,
                  Performance Tuning, Security, and Compliance Services
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                Business Intelligence & Analytics
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
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
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Intelligent IT Automation"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Intelligent IT Automation</b>
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>
                  Enterprise Observability for application performance and
                  Infrastructure quality management
                </li>
                <li>AI powered Cloud and Finops</li>
                <li>Incident management & sustainable IT</li>
                <li>
                  ML services and ChatOps for streamlined IT service management
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
                <b>Enterprise ML and Generative AI</b>
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>Customer care and call center modernization</li>
                <li>
                  Retrieval Augmented generation for knowledge self-service
                </li>
                <li>Conversational AI and virtual assistant development</li>
                <li>Development and deployment of ML models</li>
                <li>Responsible AI and model governance consulting</li>
                <li>Integration with enterprise systems and applications</li>
                <li>Data preparation and feature engineering services</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s4}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Industries</h1>

      <div className="flex flex-wrap justify-between gap-6">
        {/* Manufacturing Card */}
        <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={ind1}
            alt="Manufacturing"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">Manufacturing</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Hover content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold text-white mb-4">
              Manufacturing
            </p>
            <ul className="text-white space-y-2 text-sm">
              <li>Predictive maintenance</li>
              <li>Supply chain optimization</li>
              <li>Cloudera workload optimization</li>
              <li>SAP observability</li>
              <li>High performance Analytics</li>
              <li>AI assistants</li>
            </ul>
          </div>
        </div>

        {/* BFSI Card */}
        <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={ind2}
            alt="BFSI"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">BFSI</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Hover content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold text-white mb-4">BFSI</p>
            <ul className="text-white space-y-2 text-sm">
              <li>Customer Care</li>
              <li>Virtual Agent, conversational search</li>
              <li>App Modernisation</li>
              <li>Code, AIops, Finops</li>
              <li>Digital Labor</li>
              <li>Fraud, Risk, Wealth management</li>
            </ul>
          </div>
        </div>

        {/* Call Center Upgrade Card */}
        <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={ind3}
            alt="Call Center Upgrade"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">Call Center Upgrade</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Hover content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold text-white mb-4">
              Call Center Upgrade
            </p>
            <ul className="text-white space-y-2 text-sm">
              <li>Speech transcription</li>
              <li>Voice agent - speech synthesis</li>
              <li>Agent assist - productivity</li>
              <li>Sentiment analytics</li>
            </ul>
          </div>
        </div>

        {/* Media Card */}
        <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={ind4}
            alt="Media"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">Media</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Hover content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold text-white mb-4">Media</p>
            <ul className="text-white space-y-2 text-sm">
              <li>Generative AI language tasks</li>
              <li>Content creation</li>
              <li>Summarization</li>
              <li>Entity Extraction</li>
              <li>Productivity & Efficiency gains</li>
            </ul>
          </div>
        </div>

        {/* IT/ITES Card */}
        <div className="relative group w-full md:w-1/5 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={ind5}
            alt="IT/ITES"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">IT/ITES</p>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Hover content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold text-white mb-4">IT/ITES</p>
            <ul className="text-white space-y-2 text-sm">
              <li>Managed Security services</li>
              <li>Data center and Cloud Solutions</li>
              <li>Vendor Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};

export default Home;
