import React from "react";
import HeroImage from "../assets/heroImage.png";
import {
  FaMobileAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-gray-100 via-gray-350 to-gray-500"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a React Developer.
          </h2>
          <p className="text-black py-4 max-w-md">
            I like to build userfriendly UI of web applications which are
            optimised and robust with the use of core front-end technologies
            like JavaScript, HTML, and CSS.
          </p>
        </div>
        <div className="">
          <div className=" z-0">
            <img
              src={HeroImage}
              alt="my profile"
              className=" mt-[15rem] -mb-[5rem] rounded-3xl mx-auto h-[13rem] w-[9rem] "
            />
          </div>
          <div className=" flex flex-col items-center  content-center z-10  rounded-3xl h-[29rem] w-[23rem] bg-slate-100">
            <div className=" pt-[6rem] flex flex-col justify-center items-center">
              <h2>Adit Malla</h2>
              <h3>React Developer</h3>
            </div>
            <div className="flex flex-row justify-evenly mb-4 mt-4 w-[18rem]">
              <a
                href="https://www.facebook.com/adit.malla.9"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={30}></FaFacebook>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/adit-malla-7685b2158/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div className="rounded-3xl flex flex-col p-6  h-[13rem] w-[20rem] bg-slate-300">
              <div className="flex mb-[9px]">
                <FaMobileAlt size={30} className="mr-3" />
                <div className="flex flex-col">
                  <p className=" text-[9px] font-bold">Phone</p>
                  <p className="text-[12px] font-semibold lining-nums">
                    +977 9868840713
                  </p>
                </div>
              </div>
              <div className="flex mb-[9px]">
                <GoLocation size={30} className="mr-3" />
                <div className="flex flex-col">
                  <p className=" text-[9px] font-bold ">Location</p>
                  <p className="text-[12px] font-semibold ">
                    Nepal Rupendehi Sainamaina
                  </p>
                </div>
              </div>
              <div className="flex mb-[9px]">
                <AiOutlineMail size={30} className="mr-3" />

                <div className="flex flex-col">
                  <p className=" text-[9px] font-bold">Email</p>
                  <p className="text-[12px] font-semibold ">
                    aadimalla10@gmail
                  </p>
                </div>
              </div>
              <div className="flex mb-[9px]">
                <a
                  href="https://github.com/AaditMalla"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={30} className="mr-3" />
                </a>
                <div className="flex flex-col">
                  <p className=" text-[9px] font-bold">Github</p>
                  <p className="text-[12px] font-semibold ">
                    github.com/AaditMalla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
