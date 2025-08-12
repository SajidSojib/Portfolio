import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import pic from "../assets/sajid-png03.png";
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
const Banner = () => {
    return (
      <div
        id="banner"
        className="min-h-[calc(100vh-65px)]"
        style={{
          background:
            "linear-gradient(90deg, rgba(254, 254, 249, 1) 0%, rgba(255, 231, 196, 1) 45%, rgba(224, 189, 150, 1) 100%)",
        }}
      >
        <div className="px-4 py-16 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-between items-center gap-4 md:gap-8 flex-col-reverse md:flex-row">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-3xl font-semibold mb-2">Hello!</p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider leading-tight mb-3 md:mb-6">
              I'm <span className="text-info-content font-bold ">Sajid</span>
              <br />
              <span className="text-accent">
                <Typewriter
                  loop={true}
                  cursor
                  cursorStyle="_"
                  words={[
                    "Frontend Developer",
                    "React Developer",
                    "MERN-Stack Developer",
                  ]}
                />
              </span>
            </h1>
            <p className="text-base xl:text-lg text-base-200 tracking-wide mb-4">
              Full-Stack Developer specializing in React, Node.js, and MongoDB.
              I build performant, user-friendly web apps that solve real
              problems.
            </p>
            <div className="flex items-center justify-center md:justify-start mb-8 gap-4">
              <Link
                className="cursor-pointer border-2 rounded-full p-1 border-info-content text-info-content hover:bg-info-content hover:text-info"
                to={"https://www.facebook.com/share/16VcvbPWcj/"}
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                className="cursor-pointer border-2 rounded-full p-1 border-info-content text-info-content hover:bg-info-content hover:text-info"
                to={"https://github.com/SajidSojib"}
              >
                <FaGithub size={30} />
              </Link>
              <Link
                className="cursor-pointer border-2 rounded-full p-1 border-info-content text-info-content hover:bg-info-content hover:text-info"
                to={"https://www.linkedin.com/in/sajid-ahmed-sojib"}
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                className="cursor-pointer border-2 rounded-full p-1 border-info-content text-info-content hover:bg-info-content hover:text-info"
                to={"https://x.com/sajid_ahmed09"}
              >
                <FaXTwitter size={30} />
              </Link>
            </div>

            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <button className="btn btn-wide btn-outline border-info-content text-base-300 hover:bg-info-content hover:text-base-100 transition">
                Contact Me
              </button>
              <button className="btn btn-wide bg-info-content text-base-100">
                Download Resume
              </button>
            </div>
          </div>

          <div className="">
            <img className="-mr-5 max-w-3xs md:max-w-full" src={pic} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;