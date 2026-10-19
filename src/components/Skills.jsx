function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Tailwind CSS", level: "85%" },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20 px-8 md:px-20"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Technologies and tools I use to build modern websites.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition duration-300"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

                <span className="text-cyan-400">
                  {skill.level}
                </span>
              </div>

              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;