import React from "react";
import Herologo from "./images/herologo.png";

const Hero = () => {
  return (
    <section className="hero-section bg-no-repeat bg-cover font-thin">
      <div>
        <div className="flex flex-col-reverse md:flex md:flex-row items-center justify-center container px-14 md:space-x-10">
          <div className="mb-20 md:my-20">
            <h1 className="text-5xl mb-5 text-[#8ffff6]">
              <span className="text-[#8ffff6]">Blue</span>Print 360
            </h1>
            <p
              className="max-w-[700px] text-white "
              style={{ fontWeight: "400" }}
            >
              Transforming Businesses Through IT Governance and Innovation. Your
              Partner in Digitization, Quality Management, and Automation.
            </p>
          </div>
          <img
            src={Herologo}
            alt=""
            className="  top-16 right-0 m-10 lg:w-[250px] md:w-[200px] w-[150px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
