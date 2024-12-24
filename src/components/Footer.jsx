import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-32 text-white px-20 font-thin">
      <h1 className="text-3xl pt-5 mb-3">Contact Us :</h1>
      <div className="flex flex-col py-6 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col justify-center">
          <h1 className="flex items-center my-2">
            <FaPhoneAlt className="mr-3" /> Mobile Number: +972 593-996-999
          </h1>
          <h1 className="flex items-center my-2">
            <FaWhatsapp className="mr-3" /> WhatsApp: +972 593-996-999
          </h1>

          <h1 className="flex items-center my-2">
            <IoIosMail size={20} className="mr-3" /> Email:
            Info@blueprint-360.com
          </h1>

          <h1 className="flex items-center my-2">
            <FaLocationDot size={20} className="mr-3" /> Adress: Building 5,
            Jerusalem St. Masyoun, Ramallah, Palestine
          </h1>
        </div>

        <p className="opacity-25 py-10 text-center md:py-0 md:pt-28">
          Copyright &copy;2025 BLUEPRINT-360. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
