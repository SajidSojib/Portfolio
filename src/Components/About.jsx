import React from 'react';

const About = () => {
    return (
      <div
        id="about"
        className="px-4 mt-16 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mt-20 py-16"
        style={{
          background:
            "linear-gradient(145deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.07))",
        }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          About Me
        </h1>
        <p className="text-lg">
          Hi, I’m <span className='text-primary'>Sajid Ahmed Sojib</span>. My programming journey started out
          of pure curiosity—I loved figuring out how things work and soon found
          myself diving deep into web development. Since then, I’ve focused on
          the MERN stack (React, Node.js, MongoDB) and enjoy building projects
          that actually solve problems and make life easier.
          <br /> <br />
          What I really enjoy about programming is the chance to be creative
          while solving challenges. Whether it’s designing smooth, user-friendly
          interfaces or working on the backend to keep everything running
          seamlessly, I love the process of turning ideas into reality. I also
          like collaborating with others and learning new things every
          day—that’s what keeps me motivated.
          <br /> <br />
          Outside of coding, I’m a big fan of podcasts and staying updated with
          the latest news. It’s my way of broadening my horizons and getting
          inspired by what’s going on in tech and the world. When I’m not glued
          to the screen, I enjoy exploring new ideas and just soaking in all the
          knowledge around me.
          <br /> <br />
          Overall, I’m someone who’s passionate about growth and delivering
          quality work. I like to take on new challenges with enthusiasm and
          always aim to improve—not just as a developer but as a person.
        </p>
      </div>
    );
};

export default About;