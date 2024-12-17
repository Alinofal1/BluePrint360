import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer mt-32 text-white px-20 font-thin">
      <h1 className="text-3xl pt-5 mb-3">Contact Info:</h1>
      <div className="flex flex-col py-6 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col justify-center">
          <h1 className="flex items-center my-2">
            <FaPhoneAlt className="mr-3" /> Mobile Number: +972 777 777 777
          </h1>

          <h1 className="flex items-center my-2">
            <IoIosMail size={20} className="mr-3" /> Email:
            Info@blueprint-360.com
          </h1>

          <h1 className="flex items-center my-2">
            <FaLocationDot size={20} className="mr-3" /> Adress: uilding 5,
            Jerusalem St. Masyoun, Ramallah, Palestine
          </h1>
        </div>

        <div className="opacity-55">
          This Website Made by:
          <p className="mt-2">Ali nofal : alinofal405@gmail.com</p>
          <p className="mt-2">Mustafa Tomeh : mostafatomeh@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
