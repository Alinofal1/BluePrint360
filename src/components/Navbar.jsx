import React, { useState } from "react";
import Logo from "./images/BluePrintLogo.png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="nav bg-no-repeat bg-cover flex pt-4  px-4 h-[70px] items-center z-50 sticky top-0 pb-4 text-white bg-inherit border-b-[1px] border-white">
        <img src={Logo} alt="Blue print Logo" width={80} />

        <div className="hidden  md:block ms-auto">
          <ul className="flex space-x-5 mr-6">
            <li className="hover:text-gray-400 transition ease-in-out">
              <Link
                to="hero-section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
                className="hover:cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                className="hover:cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <Link
                to="Partners"
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                className="hover:cursor-pointer"
              >
                Partners
              </Link>
            </li>
            <li className="hover:text-gray-400 transition ease-in-out">
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                className="hover:cursor-pointer"
              >
                About Us
              </Link>
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
