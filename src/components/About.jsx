function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">
              I'm a Frontend Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I'm a passionate frontend developer who enjoys creating
              modern and responsive websites. I focus on writing clean
              and reusable code and building user-friendly interfaces.
            </p>

            <p className="text-gray-400 leading-8">
              My main technologies include HTML, CSS, JavaScript,
              React and Tailwind CSS. I'm continuously learning and
              improving my development skills.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              My Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg">
                HTML
              </span>

              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
                CSS
              </span>

              <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg">
                JavaScript
              </span>

              <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">
                React
              </span>

              <span className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-lg">
                Tailwind CSS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;