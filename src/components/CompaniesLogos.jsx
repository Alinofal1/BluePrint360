import React from "react";
import GLPI from "./images/glpi-logo.png";
import Systack from "./images/cystack-logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CompaniesLogos = () => {
  return (
    <section className="my-10 flex flex-col items-center mr-52 md:flex md:justify-around lg:flex-row md:mr-52">
      <div className="card m-10 text-center w-52">
        <div
          className="card-body mt-[50px]  w-[400px] rounded-2xl min-h-[300px]"
          style={{ boxShadow: "10px 10px 20px 3px #206c8e" }}
        >
          <div className="card-img">
            <img src={GLPI} alt="" className="w-40 m-auto p-8" />
            <div className="card-h1">
              <h1 className="text-2xl text-[#116388]">GLPI Network</h1>
              <div className="card-text pb-10 px-10">
                <p className="p-2 pb-4 text-[#116388] text-left">
                  {" "}
                  As our valued partner, GLPI Network helps us deliver
                  comprehensive IT governance and asset management solutions.
                  Through GLPI, we provide clients with powerful tools to track
                  assets, manage incidents, and optimize IT operations.
                </p>
                <Link
                  to={"/glpi"}
                  className="hover:underline flex items-center text-[#11384a]"
                >
                  For More Details <FaArrowRightLong className="mx-1 mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-10 text-center w-52">
        <div
          className="card-body mt-[50px] w-[400px] rounded-2xl min-h-[300px]"
          style={{ boxShadow: "10px 10px 20px 3px #206c8e" }}
        >
          <div className="card-img">
            <img src={Systack} alt="" className="w-40 m-auto p-8" />
            <div className="card-h1">
              <h1 className="text-2xl text-[#116388]">Cystack.ps </h1>
              <div className="card-text px-10 pb-10">
                <p className="p-2 pb-4 text-[#116388] text-left">
                  {" "}
                  In partnership with Cystack.ps, we ensure top-tier
                  cybersecurity solutions. From threat detection to data
                  protection, Cystack.ps empowers us to safeguard businesses
                  with advanced and reliable security services.
                </p>
                <Link
                  to={"/cyastack"}
                  className="hover:underline flex items-center text-[#11384a]"
                >
                  For More Details{" "}
                  <FaArrowRightLong className="mx-1 mt-1 text-[#11384a]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogos;
