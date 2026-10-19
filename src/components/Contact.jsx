function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Let's work together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Let's Talk
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              I'm always interested in hearing about new projects,
              opportunities and ideas. Feel free to send me a message.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-cyan-400 font-semibold">
                  Email
                </p>
                <p className="text-gray-400">
                  your@email.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Location
                </p>
                <p className="text-gray-400">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Availability
                </p>
                <p className="text-gray-400">
                  Available for freelance projects
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;