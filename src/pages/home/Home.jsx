import React from "react";
import "./Home.css";
import pt from "../../assets/pt.mp4";
import earth from "../../assets/earth.png"
import nature from "../../assets/1542298796.jpg"
import work from "../../assets/work culture.png"



const Home = () => {
  return (
    <div className="Home">

      <div className="video-container">
        <video autoPlay loop muted>
          <source src={pt} type="video/mp4" />
        </video>
        <div className="video-text">
          <h1><span>Youtube</span> video</h1>
        </div>
      </div>

      <div className="img-container-1">
        <div className="img-content">
          <h1>Building The future</h1>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-items">
          <img src={work} alt="img"  width="100%" height="100%" />
        </div>
        <div className="grid-items">
          <h1>Features <span>Ought</span> to Partake</h1>
        </div>
        <div className="grid-items">
          <img src={nature} alt="img" width="100%" height="100%" />
        </div>
        <div className="grid-items">
          <img src={earth} alt="img" width="100%" height="100%" />
        </div>
      </div>


      <div className="footer">
        <div className="footer-content">
          <h1>Every Inspiration from nature</h1>
          <p>Get Started using our services with a 10-day free trial</p>
          <button>Try It Now </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
