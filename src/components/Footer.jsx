function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Haider Ali
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </nav>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Haider Ali. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;