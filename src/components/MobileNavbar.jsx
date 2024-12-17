import React from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mobile bg-no-repeat bg-cover flex justify-center md:hidden bg-inherit text-white sticky top-0">
      <div className="text-3xl">
        <ul className="flex flex-col">
          <li className="my-6 mt-24 hover:text-gray-600 transition ease-in-out">
            <Link onClick={scrollTop}>Home</Link>
          </li>
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
            <a href="#services">Services</a>
          </li>
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
            <a href="#Partners">Partners</a>
          </li>
          <li className="my-6 hover:text-gray-600 transition ease-in-out">
            <a href="#about-us">About Us</a>
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
