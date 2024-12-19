import React from "react";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  return (
    <div className="mobile bg-no-repeat bg-cover flex justify-center border-b-[1px] border-white md:hidden bg-inherit text-white sticky top-0">
      <div className="text-3xl">
        <ul className="flex flex-col">
          <li className="my-6 mt-24 hover:text-gray-600 transition ease-in-out">
            <Link
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={400}
              className="hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
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
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
            <Link
              to="Partners"
              spy={true}
              smooth={true}
              offset={-40}
              duration={400}
              className="hover:cursor-pointer"
            >
              Partners
            </Link>
          </li>
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
            <Link
              to="about-us"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
              className="hover:cursor-pointer"
            >
              About Us
            </Link>
          </li>
          {/*                 
                <li className='my-6 hover:text-gray-600 transition ease-in-out'>
                    <Link to={'/case-studies'}>Case Studies</Link>
                </li>
                <li className='my-6 hover:text-gray-600 transition ease-in-out'>
                    <Link to={'/resources'}>Resources</Link>
                </li>
                <li className='my-6 hover:text-gray-600 transition ease-in-out'>
                    <Link to={'/contact-us'}>Contact Us</Link>
                </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
