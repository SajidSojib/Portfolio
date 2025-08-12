import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div>
          <h1 className="text-xl font-bold text-white">Sajid Ahmed</h1>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
