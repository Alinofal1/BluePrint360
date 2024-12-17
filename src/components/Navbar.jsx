import React, { useState } from "react";
import Logo from "./images/BluePrintLogo.png";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="nav bg-no-repeat bg-cover flex pt-4  px-4 h-[70px] items-center z-50 sticky top-0 pb-4 text-white bg-inherit border-b-[1px] border-white">
        <img src={Logo} alt="Blue print Logo" width={80} />

        <div className="hidden  md:block ms-auto">
          <ul className="flex space-x-5 mr-6">
            <li className="hover:text-gray-400 transition ease-in-out">
              <Link to={"/"} onClick={scrollTop}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <a href="#Partners">Partners</a>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <a href="#about-us">About Us</a>
            </li>
            {/* <li className='hover:text-gray-400 transition ease-in-out'>
                    <Link to={'/case-studies'}>Case Studies</Link>
                </li>
                <li className='hover:text-gray-400 transition ease-in-out'>
                    <Link to={'/resources'}>Resources</Link>
                </li>
                <li className='hover:text-gray-400 transition ease-in-out'>
                    <Link to={'/contact-us'}>Contact Us</Link>
                </li> */}
          </ul>
        </div>
        <div className="ms-auto md:hidden" onClick={() => setMenu(!menu)}>
          {menu ? <IoMdCloseCircle size={30} /> : <IoIosMenu size={30} />}
        </div>
      </div>
      {menu ? <MobileNavbar /> : null}
    </>
  );
};

export default Navbar;
