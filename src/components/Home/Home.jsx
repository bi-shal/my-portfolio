import React from "react";
import HeroImage from '../../../src/assets/portfolio/Bishal_03.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";



const Home = () => {
    return (
        <div>
             <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full sm:mt-72 md:mt-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS, MongoDB, Bootstrap, JavaScript.
          </p>

         <div className="flex sm:mb-4">
         <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>


          <div>
            <a
              href="/resume.pdf"
              smooth
              duration={500}
              className="group ml-10 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r to-cyan-500 from-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
         </div>




        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-84 md:mr-20 md:mt-10 sm:mb-24"
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;