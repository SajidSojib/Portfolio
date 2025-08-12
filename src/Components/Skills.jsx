import React from "react";
import Marquee from "react-fast-marquee";

const skills = [
    {
    id: 1,
    title: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "A powerful JavaScript library for building dynamic and responsive user interfaces using a component-based architecture.",
    gradientFrom: "from-cyan-700",
    gradientTo: "to-blue-900",
    borderColor: "border-cyan-400",
  },
  {
    id: 2,
    title: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "The essential scripting language for web development, enabling interactive and functional web pages with real-time behavior.",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-600",
    borderColor: "border-yellow-300",
  },
  {
    id: 3,
    title: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "The backbone of the web, used for structuring content in a semantic and accessible manner.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600",
    borderColor: "border-orange-400",
  },
  {
    id: 4,
    title: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "The styling language that brings design to life with layouts, animations, and responsiveness.",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
    borderColor: "border-blue-400",
  },
  {
    id: 5,
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description:
      "A utility-first CSS framework for rapidly building modern and custom UIs with minimal code.",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
    borderColor: "border-teal-400",
  },
  {
    id: 6,
    title: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A fast, event-driven JavaScript runtime for building scalable server-side and network applications.",
    gradientFrom: "from-green-700",
    gradientTo: "to-green-900",
    borderColor: "border-green-400",
  },
  {
    id: 7,
    title: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "A minimalist Node.js web framework that simplifies the creation of APIs and backend services.",
    gradientFrom: "from-gray-700",
    gradientTo: "to-gray-900",
    borderColor: "border-gray-400",
  },
  {
    id: 8,
    title: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "A flexible NoSQL database that stores data in JSON-like documents, ideal for modern applications.",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-800",
    borderColor: "border-green-300",
  },
  {
    id: 9,
    title: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "A version control system that helps track changes and collaborate on code effectively.",
    gradientFrom: "from-red-600",
    gradientTo: "to-red-800",
    borderColor: "border-red-400",
  },
  {
    id: 10,
    title: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description:
      "A complete backend solution offering authentication, real-time database, and hosting for web apps.",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-600",
    borderColor: "border-yellow-300",
  },
];


const Skills = () => {
  return (
    <div className="mt-16 mb-24 lg:mt-20">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        My Skills
      </h1>
      <Marquee className="py-3" pauseOnHover speed={50} gradient={false}>
        {skills.map(
          ({
            id,
            title,
            image,
            description,
            borderColor,
          }) => (
            <div
              key={id}
              className={`
              flex flex-col items-center justify-center border-primary border-2 w-80 h-52 p-6 rounded-xl
              text-white
              mx-6
              transition-all duration-300
              relative
              cursor-pointer
              group
            `}
            >
              {/* Border circle on hover */}
              <div
                className={`
                absolute -inset-1 rounded-xl border-4 border-transparent
                transition-all duration-300
                group-hover:${borderColor}
                group-hover:border-opacity-100
              `}
                aria-hidden="true"
              ></div>

              <img
                src={image}
                alt={title}
                className="w-16 h-16 object-contain z-10"
                draggable={false}
              />
              <span className="mt-3 font-semibold z-10">{title}</span>
              <p className="text-center text-sm mt-1 text-white/80 z-10">
                {description}
              </p>
            </div>
          )
        )}
      </Marquee>
    </div>
  );
};

export default Skills;
