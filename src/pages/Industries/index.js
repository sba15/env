import React from 'react';
import "./style.scss";
import Indus from "../../assets/videos/Industries.mp4";

const Industries = () => {
  return (
  <>
        <section>
        <div class="ai-green-v5">
          <div class="init-ai-section5">
            <div className="abus1">Our Industry Expertise & Solutions</div>
            <div class="init-red-bg px-5">
              Customized solutions for every industry challenge
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Indus} type="video/mp4" />
          </video>
        </div>
      </section>
  </>
  )
}

export default Industries;