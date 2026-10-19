function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md text-white px-8 py-5 flex items-center justify-between border-b border-gray-800">
      
      <h2 className="text-2xl font-bold text-cyan-400">
        Haider Ali
      </h2>

      <nav className="flex gap-8">
        <a href="#home" className="hover:text-cyan-400 transition duration-300">
          Home
        </a>

        <a href="#about" className="hover:text-cyan-400 transition duration-300">
          About
        </a>

        <a href="#skills" className="hover:text-cyan-400 transition duration-300">
          Skills
        </a>

        <a href="#projects" className="hover:text-cyan-400 transition duration-300">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400 transition duration-300">
          Contact
        </a>
      </nav>

    </header>
  );
}

export default Header;