import React from 'react';
import pic1 from "../assets/webpage1.png";
import pic2 from "../assets/webpage2.png";
import pic3 from "../assets/webpage3.png";
import { Link } from 'react-router';

const data = [
  {
    key: 1,
    pic: pic1,
    title: "🩸 RedAid – Blood Donation Platform",
    description:
      "RedAid is a MERN stack-based blood donation platform designed to seamlessly connect blood donors with those in urgent need. It offers a user-friendly interface, role-based dashboards, and secure integrations to make blood donation more accessible and efficient.",
    live: "https://true-review-3d3e3.web.app/",
    github: "https://github.com/SajidSojib/RedAid-Client",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Express", "MongoDB"],
    challenges: [
      "Implementing role-based API calls for different user types",
      "Ensuring proper UI updates based on role permissions",
      "Securing backend routes with proper authorization",
    ],
    futurePlans: [
      "Upgrade the UI with a more modern and accessible design",
      "Integrate real-time notifications for urgent donation requests",
      "Implement location-based donor search using maps",
    ],
  },
  {
    key: 2,
    pic: pic2,
    title: "⭐ TrueReview – Service Review System",
    description:
      "TrueReview is a Service Review Application designed to let users discover, post, and review various services. It offers a seamless and interactive experience for users to share their opinions, manage services, and engage with reviews in a secure environment.",
    live: "https://true-review-3d3e3.web.app/",
    github: "https://true-review-3d3e3.web.app/",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Express", "MongoDB"],
    challenges: [
      "Implementing secure authentication and authorization with JWT",
      "Adding backend filter API calls",
      "Adding backend sort API calls",
    ],
    futurePlans: [
      "Role-based dashboard UI",
      "Authentication and authorization",
      "Introduce a rating breakdown and analytics dashboard",
    ],
  },
  {
    key: 3,
    pic: pic3,
    title: "🏡 LivMate – Find Your Ideal Roommate",
    description:
      "LivMate is a responsive web platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create posts, explore available roommate listings, and manage their own roommate search posts easily.",
    live: "https://livmate-18f71.web.app/",
    github: "https://github.com/SajidSojib/LivMate-Client",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Express", "MongoDB"],
    challenges: [
      "Implementing full CRUD operations for roommate listings",
      "Ensuring smooth form handling and state management",
    ],
    futurePlans: [
      "Add real-time chat between potential roommates",
      "Implement AI-based roommate matching suggestions",
      "Role-based dashboard UI",
      "Authentication and authorization",
    ],
  },
];

const Projects = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          My Projects
        </h1>
        <div className='className="px-4 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg flex items-center flex-col lg:flex-row justify-between gap-6'>
          {data?.map((project) => (
            <div
              className="max-w-96 h-[400px] overflow-hidden rounded-lg border border-primary shadow-lg group  flex items-center justify-between gap-6  flex-col"
              key={project.key}
              style={{
                background:
                  "linear-gradient(145deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1))",
              }}
            >
              <div className="overflow-hidden w-full h-full">
                <img
                  src={project.pic}
                  alt="Project Screenshot"
                  className="w-full  object-cover transition-all duration-[5000ms] ease-linear group-hover:-translate-y-[70%]"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-accent mb-2">
                  {project.title}
                </h2>
                <div className='flex items-center justify-center'>
                  <Link
                    className="btn btn-primary btn-wide mt-2 text-white"
                    to={`/projects/${project.key}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;