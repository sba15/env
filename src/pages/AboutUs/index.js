import React from "react";
import "./style.scss";
import aboutUs from "../../assets/videos/aboutUs.mp4";

const AboutUs = () => {
  return (
    <>
      <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abus">About Us</div>
            <div class="init-red-bg px-5">Intelligent Solutions, Limitless Potential</div>
          </div>
          <video autoPlay muted loop>
            <source src={aboutUs} type="video/mp4" />
          </video>
        </div>
      </section>

      
    </>
  );
};

export default AboutUs;
