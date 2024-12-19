import React from "react";
import Logo from "./images/BluePrintLogo.png";

const Partners = () => {
  return (
    <section id="Partners">
      <div className="partner bg-no-repeat bg-cover text-white py-10">
        <div className="flex flex-col-reverse items-center text-center md:text-left md:h-[450px] md:flex md:flex-row  md:justify-around">
          <div className=" w-[300px] lg:w-[600px] ">
            <h1 className="text-5xl text-[#8ffff6] mb-6">Partners</h1>
            <p className="text-balance">
              At Blueprint 360, we collaborate with industry-leading partners to
              deliver innovative, secure, and efficient IT solutions. Our
              partnerships ensure that our clients receive cutting-edge
              technologies, seamless integrations, and unmatched expertise
              tailored to their business needs{" "}
            </p>
          </div>

          <div className=" w-[300px] lg:w-[400px] ">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
