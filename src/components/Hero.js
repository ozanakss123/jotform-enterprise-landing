import heroLogo from "../assets/hero-img.png";

import { BsFillPlayFill } from "react-icons/bs";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h5>more than just forms</h5>
        <h1>One platform to power all your data</h1>
        <p className="hero-text">
          Enable data-driven decisions without compromising security. With
          no-code solutions and administrative controls from Jotform Enterprise,
          teams can break free from legacy systems to automate, collaborate, and
          scale.
        </p>
        <div className="btn-container">
          <a href="#" className="btn btn-contact">
            Get a Demo
          </a>
          <a href="#" className="btn btn-demo">
            <BsFillPlayFill className="btn-icon" />
            <p>Watch our Demo</p>
          </a>
        </div>
      </div>
      <div className="right">
        <img src={heroLogo} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
