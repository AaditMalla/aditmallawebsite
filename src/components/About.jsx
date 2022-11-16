import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:pt-0 pt-[43rem] h-screen bg-gradient-to-b from-gray-500 via-gray-350 to-gray-100 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a React developer with 1 year of experience, who is passionate
          about programming,developing and problem solving. I am a team player
          who likes to work with a dedicated team to build robust and efficient
          software/applications suited to the user’s needs.
        </p>

        <br />

        {/* <div>
          <h1 className="text-xl font-bold">Education</h1>
        </div> */}
      </div>
    </div>
  );
};

export default About;
