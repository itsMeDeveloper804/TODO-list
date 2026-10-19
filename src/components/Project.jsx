function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping website with product cards, categories and a responsive layout.",
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application that displays weather information in a clean interface.",
      tech: ["React", "API"],
    },
    {
      title: "Task Manager",
      description:
        "A simple task management application where users can create and manage their tasks.",
      tech: ["React", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Some of my recent work and practice projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-44 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <span className="text-gray-500 text-lg">
                  Project Preview
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-medium transition">
                  Live Demo
                </button>

                <button className="border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 px-4 py-2 rounded-lg font-medium transition">
                  GitHub
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;