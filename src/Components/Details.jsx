import React from "react";
import { useParams, useNavigate } from "react-router";
import pic1 from "../assets/webpage1.png";
import pic2 from "../assets/webpage2.png";
import pic3 from "../assets/webpage3.png";

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

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.find((p) => p.key === parseInt(id));

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  return (
    <div className="grad">
      <div
        className="min-h-[calc(100vh-65px)] px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto"
        style={{
          background:
            "linear-gradient(145deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1))",
        }}
      >
        {/* Screenshot with hover scroll effect */}
        <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg group mb-6 border border-gray-300">
          <img
            src={project.pic}
            alt={project.title}
            className="w-full object-cover transition-all duration-[6000ms] ease-linear group-hover:-translate-y-[70%]"
          />
        </div>

        {/* Project Info */}
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="text-white/80 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <h2 className="text-lg font-semibold mb-2">Tech Stack:</h2>
        <ul className="list-disc list-inside mb-4 text-white/80">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {/* Challenges */}
        <h2 className="text-lg font-semibold mb-2">Challenges:</h2>
        <ul className="list-disc list-inside mb-4 text-white/80">
          {project.challenges.map((ch, index) => (
            <li key={index}>{ch}</li>
          ))}
        </ul>

        {/* Future Plans */}
        <h2 className="text-lg font-semibold mb-2">Future Plans:</h2>
        <ul className="list-disc list-inside mb-6 text-white/80">
          {project.futurePlans.map((fp, index) => (
            <li key={index}>{fp}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mb-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary rounded-lg"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Details;
