import React from "react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-500 via-gray-350 to-gray-100 text-black"
    >
      {/* <SocialLinks /> */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action=""
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="placeholder:italic placeholder:text-slate-900 p-2 bg-transparent border-2 border-gray-600 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" placeholder:italic placeholder:text-slate-900 my-4 p-2 bg-transparent border-2 border-gray-600 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="placeholder:italic placeholder:text-slate-900 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none border-gray-600"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-gray-500 to-gray-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              <a href="mailto:aadimalla10@gmail.com">Send</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
