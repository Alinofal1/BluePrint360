import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="aboutus bg-no-repeat bg-cover text-white py-10 overflow-hidden">
        <h1
          className="text-6xl block text-center pb-20 md:pb-12 text-[#8ffff6] font-thin"
          style={{ textShadow: "5px 5px 8px" }}
        >
          About Us
        </h1>
        <div className="flex flex-col items-center md:h-[450px] md:flex md:flex-row md:justify-around mr-4 md:mr-0">
          <div className=" w-[300px] lg:w-[600px] text-center mb-12 md:mb-0 md:text-left">
            <h1 className="text-5xl text-[#8ffff6] mb-6">Who We Are</h1>
            <p className="text-justify">
              At Blueprint 360, we are a leading technology consultancy firm
              specializing in IT Governance, Digitization, Quality Management,
              and Process Automation. With a passion for innovation and a
              commitment to excellence, we provide businesses with tailored
              solutions to streamline operations, enhance efficiency, and drive
              sustainable growth. Our team of experts combines years of
              experience with cutting-edge technologies to deliver services that
              empower organizations to thrive in an ever-evolving digital
              landscape.
            </p>
          </div>

          <div className=" w-[300px] lg:w-[600px]">
            <h1 className="text-5xl  text-[#8ffff6] mb-6 text-center">
              Why Choose Us?
            </h1>
            <p className="text-justify">
              At Blueprint 360, we don’t just deliver solutions; we build
              lasting partnerships. Our commitment to quality, innovation, and
              client success sets us apart. By leveraging strategic
              collaborations with industry leaders like GLPI Network, Zabbix,
              Grafana, and Cyastack, we ensure seamless integrations and
              advanced solutions for your business needs. With a focus on
              process automation, cybersecurity, and data-driven
              decision-making, we help you stay ahead of the competition. Choose
              us for our expertise, dedication, and ability to transform your
              challenges into opportunities for success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
