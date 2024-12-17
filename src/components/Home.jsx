import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Partners from "./Partners";
import AboutUs from "./AboutUs";
import CompaniesLogos from "./CompaniesLogos";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1
        id="services"
        className="text-6xl block text-center mt-4 text-[#206c8e] font-thin"
        style={{ textShadow: "5px 5px 8px" }}
      >
        Our Services
      </h1>
      <Cards />
      <Partners />
      <h1
        className="text-6xl block text-center mt-4 text-[#206c8e] font-thin"
        style={{ textShadow: "5px 5px 8px" }}
      >
        Our Partners
      </h1>
      <CompaniesLogos />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
