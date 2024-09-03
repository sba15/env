import React from "react";
import datapage from "../../assets/videos/datapage.mp4";
import "./style.scss";


const Home = () => {
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

  
    </>
  );
};

export default Home;
