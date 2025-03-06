import "./hero.css";
import Lottie from "lottie-react";
import DevAnnim from "../../../public/animation/Dev.json";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="../../../public/yahya.png" className="avatar" alt="" />
          <p>Yahya Elouazzani</p>
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Full stack developer
        </h1>
        <p className="sub-title">
          .
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
      <Lottie 
        style={{height: 360}}
        animationData={DevAnnim}/>
      </div>
    </section>
  );
};

export default Hero;
