import React from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import contactLottie from "../assets/contact-lottie.json";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
const Contact = () => {
  return (
    // <div className="py-16 mx-auto lg:py-20 lg:pt-18 rounded-2xl ">
    <div id="contact" className=" mx-auto mb-24 rounded-2xl ">
      <section className="">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Contact Me
        </h2>
        <p className="text-white/80 text-center w-3/4 mx-auto mb-12">
          If you have any questions or would like to work together, please don't
          hesitate to contact me.
        </p>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <Lottie
              style={{ filter: "hue-rotate(290deg)" }}
              animationData={contactLottie}
              loop={true}
            />
          </div>

          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent successfully");
            }}
          >
            <div>
              <div>
                <h2 className="text-2xl font-bold">My Contact Info</h2>
                <p className="mt-4 mb-1">Name: <span className="font-semibold text-primary">Sajid Ahmed Sojib</span></p>
                <p className="mb-1">Email: <span className="font-semibold text-primary">sajidahmed2401@gmail.com</span></p>
                <p className="mb-3">Phone/WhatsApp: <span className="font-semibold text-primary">+8801770480420</span></p>

                <div className="flex items-center mb-8 gap-4">
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
              </div>
              <h1 className="text-2xl font-bold">Get in touch</h1>
              <p className="pt-2">Fill in the form to connect with us</p>
            </div>
            <label className="block">
              <span className="mb-1 text-base-300">Full name</span>
              <label
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="input input-primary border-none shadow-sm shadow-primary bg-info w-full"
              >
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                />
              </label>
            </label>
            <label
              data-aos-delay="100"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className="block"
            >
              <span className="mb-1">Email address</span>
              <label className="input shadow-sm shadow-primary input-primary border-none bg-info w-full validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="Enter Email" required />
              </label>
            </label>
            <label
              data-aos-delay="100"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              className="block"
            >
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md shadow-sm shadow-primary textarea border-none textarea-primary bg-info py-2 px-3"
                placeholder="Your message"
              ></textarea>
            </label>
            <button
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 text-white btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
