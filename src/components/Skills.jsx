import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import postman from "../assets/postman.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-white",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-white",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-white",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-white",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 6,
      src: postman,
      title: "Postman",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-white",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="skills"
      className="md:pt-0 pt-[15rem] bg-gradient-to-b pt-11 from-gray-100 via-gray-350 to-gray-500 w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-black">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md text-black hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
