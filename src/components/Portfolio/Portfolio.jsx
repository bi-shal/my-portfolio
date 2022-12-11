import React from 'react';
import arrayDestruc from '../../../src/assets/Shot/Screenshot_140.png'
// import arrayDestruc from '../../../src/assets/portfolio1/arrayDestruc.jpg'
import reactParallax from '../../../src/assets/Shot/Screenshot_135.png'
import navbar from '../../../src/assets/Shot/Screenshot_136.png'
import reactSmooth from '../../../src/assets/Shot/Screenshot_137.png'
import installNode from '../../../src/assets/Shot/Screenshot_139.png'
import reactWeather from '../../../src/assets/Shot/Screenshot_141.png'
import { Link as Link1 } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Link as LinkScrool } from 'react-scroll';

const Portfolio = () => {
  
    const portfolios = [
        {
          id: 1,
          src: arrayDestruc,
          href:'https://assignment-12-client-sit-ed6c9.web.app/',
          code:'https://github.com/bi-shal/sisco-phone-server',
          too:'/phone'
        },
        {
          id: 2,
          src: reactParallax,
          href:'https://assignment-11-7a3be.web.app/',
          code:'https://github.com/bi-shal/photoShoot',
          too:'/photo'
        },
        {
          id: 3,
          src: navbar,
          href:'https://imaginative-blini-1dca2e.netlify.app/',
          code:'https://github.com/bi-shal/Fox-Quiz',
          too:'/courses'
        },
        {
          id: 4,
          src: reactSmooth,
          href:'https://radiant-lokum-32eee6.netlify.app/',
          code:'https://github.com/bi-shal/Feel-free-body',
          too:'/mulitProduct'
          
        },
        {
          id: 5,
          src: installNode,
          href:'https://assignments-10-d4eff.web.app',
          code:'https://github.com/bi-shal/waydemy-client',
          too:'/lerning'
        },
        {
          id: 6,
          src: reactWeather,
          href:'https://zippy-griffin-874edf.netlify.app/',
          code:'https://github.com/bi-shal/Feel-free-body',
          too:'/gim'
        },
      ];


    return (
        <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           Projects
          </p>
          <p className="py-6">Check out some of my work right here . . .</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code,too }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <>
              <img
                src={src}
                alt="bishal"
                className="rounded-md duration-200 hover:scale-105"
              />
              </>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   <a href={href}>Demo</a>
                </button>

                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <Link1 to={too}> Details</Link1>
                </button> */}
               
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Portfolio;