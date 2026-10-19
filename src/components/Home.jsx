function Home() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-gray-950 text-white flex items-center px-8 md:px-20"
    >
      <div className="max-w-3xl">

        <p className="text-cyan-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Haider Ali
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          Frontend Developer
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8 max-w-2xl">
          I build modern, responsive and user-friendly websites
          using HTML, CSS, JavaScript, React and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;