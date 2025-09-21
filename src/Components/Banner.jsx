import React from "react";
import { Typewriter } from "react-simple-typewriter";
import pic from "../assets/sajid-png-05.png";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { Link as LinkScroll } from "react-scroll";

const Banner = () => {
  return (
    <div
      id="banner"
      className="min-h-[calc(100vh-65px)]"
      style={{
        background:
          "linear-gradient(145deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.07))",
      }}
    >
      <div className="px-4 py-16 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-between items-center gap-4 md:gap-8 flex-col-reverse md:flex-row">
        {/* Left Side */}
        <div data-aos="fade-right" className="max-w-2xl text-center md:text-left">
          <p className="text-3xl font-semibold mb-2">Hello!</p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider leading-tight mb-3 md:mb-6">
            I'm <span className="text-primary font-bold ">Sajid</span>
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
          <p className="text-base xl:text-lg text-white/80 tracking-wide mb-4">
            Full-Stack Developer specializing in React, Node.js, and MongoDB. I
            build performant, user-friendly web apps that solve real problems.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start mb-8 gap-4">
            <Link
              className="cursor-pointer border-2 rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white"
              to={"https://www.facebook.com/share/16VcvbPWcj/"}
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              className="cursor-pointer border-2 rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white"
              to={"https://github.com/SajidSojib"}
            >
              <FaGithub size={30} />
            </Link>
            <Link
              className="cursor-pointer border-2 rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white"
              to={"https://www.linkedin.com/in/sajid-ahmed-sojib"}
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              className="cursor-pointer border-2 rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white"
              to={"https://x.com/sajid_ahmed09"}
            >
              <FaXTwitter size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <LinkScroll
              to="contact"
              smooth={true}
              offset={-64}
              duration={500}
              spy={true}
              exact="true"
              className="btn btn-wide btn-outline border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              Contact Me
            </LinkScroll>

            {/* Resume Modal Trigger */}
            <label
              htmlFor="resume_modal"
              className="btn btn-wide btn-primary cursor-pointer"
            >
              Download Resume
            </label>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div data-aos="fade-left" className="">
          <img className="-mr-5 max-w-3xs md:max-w-full" src={pic} alt="" />
        </div>
      </div>

      {/* Resume Modal */}
      <input type="checkbox" id="resume_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-lg">
          <h3 className="font-bold text-xl mb-4 text-primary">
            Resume Options
          </h3>
          <p className="mb-6 text-white/80">
            You can download or preview my resume below:
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="/resume.pdf" download className="btn btn-primary flex-1">
              Download
            </a>
            <a
              href="https://drive.google.com/file/d/1Tk1UtOusU9Yv31aH7eby29JpCHehVw_N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1"
            >
              View
            </a>
          </div>
          <div className="modal-action">
            <label htmlFor="resume_modal" className="btn btn-accent text-white">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
