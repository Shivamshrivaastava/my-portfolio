import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Menu, X, FileDown } from "lucide-react";
import MyPic from "../src/images/MyPic.jpg";
import Brainwave from "../src/images/Brainwave.png";
import movix from "../src/images/movix-logo.svg";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Shivam Shrivastava
            </h1>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1z24BtO62IKWmyk1sWw5eNqnDvNIfdV89/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  // Open the resume in a new tab
                  window.open(
                    "https://drive.google.com/file/d/1z24BtO62IKWmyk1sWw5eNqnDvNIfdV89/view?usp=sharing",
                    "_blank"
                  );
                  // Trigger download
                  const a = document.createElement("a");
                  a.href =
                    "https://drive.google.com/uc?export=download&id=1zL4Mt6FLHUPrgm9euOJ_OeLF7Y3zGYpL";
                  a.download = "Resume.pdf"; // Optional: Rename the file
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
              >
                <FileDown size={20} />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1zL4Mt6FLHUPrgm9euOJ_OeLF7Y3zGYpL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  // Open the resume in a new tab
                  window.open(
                    "https://drive.google.com/file/d/1zL4Mt6FLHUPrgm9euOJ_OeLF7Y3zGYpL/view?usp=sharing",
                    "_blank"
                  );
                  // Trigger download
                  const a = document.createElement("a");
                  a.href =
                    "https://drive.google.com/uc?export=download&id=1zL4Mt6FLHUPrgm9euOJ_OeLF7Y3zGYpL";
                  a.download = "Resume.pdf"; // Optional: Rename the file
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
              >
                <FileDown size={20} />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Full Stack Web Developer
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Dynamic Full Stack Web Developer specializing in the MERN stack,
                adept in creating scalable web applications while leveraging
                strong problem-solving and collaboration skills. Committed to
                enhancing development workflows and maintaining software
                excellence.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={MyPic}
                alt="Shivam Shrivastava"
                className="rounded-full w-72 h-72 object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {["React", "HTML5", "JavaScript", "CSS3"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Problem Solving", "Teamwork", "Adaptability"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brainwave Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={Brainwave}
                alt="Brainwave Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Brainwave</h3>
                <p className="text-gray-600 mb-4">
                  A modern, responsive web application featuring a sleek user
                  interface and seamless user experience using ReactJS and
                  Tailwind CSS.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Shivamshrivaastava/Brainwave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://brainwaveco.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Movix Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={movix}
                alt="Movix Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Movix</h3>
                <p className="text-gray-600 mb-4">
                  A movie browsing platform using React featuring category-based
                  search and detailed movie info with a clean, responsive
                  interface.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Shivamshrivaastava/Movix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://modernmoviemovix.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Analytics Platform */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Analytics Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Social Media Analytics Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  A responsive interface built with HTML5, CSS3, and JavaScript
                  for social media analytics with comprehensive dashboards.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Shivamshrivaastava/Solar-Stackers_016"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://radiant-crostata-11596d.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://github.com/Shivamshrivaastava"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github size={32} className="text-gray-800 mb-2" />
              <span className="text-gray-600">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin size={32} className="text-blue-600 mb-2" />
              <span className="text-gray-600">LinkedIn</span>
            </a>
            <a
              href="mailto:shivamshrivaastava@gmail.com"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail size={32} className="text-red-500 mb-2" />
              <span className="text-gray-600">Email</span>
              <span className="text-sm text-gray-500 mt-1">
                shivamshrivaastava@gmail.com
              </span>
            </a>
            <a
              href="tel:+919589460598"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone size={32} className="text-green-500 mb-2" />
              <span className="text-gray-600">Phone</span>
              <span className="text-sm text-gray-500 mt-1">+91 9589460598</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Shivam Shrivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
