import React from 'react';

const About = () => {
    return (
        <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-12">
          I’m a Front End Web developer. I am passionate about learning and teaching As much as possible,
          I share my knowledge with others. Solving real-world problems is one of my favorite things to do. Throughout my career, I have always been strategic and goal-oriented A clear idea of the end goal.
          <br />
          <br />
          Most of the time I work with React but some technologies I enjoy working with include Redux, JavaScript as well as TypeScript.
          </p>
  
          <br />
  
          <p className="text-xl">
          </p>
        </div>
      </div>
    );
};

export default About;