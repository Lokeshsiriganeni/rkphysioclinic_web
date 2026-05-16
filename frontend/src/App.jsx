import React, { useState } from "react";
import {
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Menu,
  X,
} from "lucide-react";

// import {resumePdf} from "Lokesh_Siriganeni_Resume_2y_updated.pdf"
export default function App() {
  const [activeTab, setActiveTab] = useState("accenture");
  const [menuOpen, setMenuOpen] = useState(false);

  const externalLinks = {
    githubProfile: "https://github.com/lokeshsiriganeni",
    linkedinProfile: "https://linkedin.com/in/lokeshsiriganeni",
    resumePdf: "",
    mediaMarktProject: "https://www.mediamarkt.de/",
    smartHelpRepo: "",
  };

  const skills = {
    frontend: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
      "Context API",
      "Responsive Design",
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "Axios", "JWT"],
    databaseTools: [
      "SQL",
      "MySQL",
      "Git",
      "GitHub",
      "Contentful CMS",
      "Query Optimization",
    ],
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-lg">
            <Terminal size={22} />
            <span>lokesh.dev()</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-teal-400 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-teal-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-teal-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </nav>

          {/* Resume Button */}
          {/* <a
            href={externalLinks.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-black transition"
          >
            <FileText size={16} />
            Resume
          </a> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-4 bg-slate-900 border-t border-slate-800 flex flex-col gap-4 text-slate-300">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href={externalLinks.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400"
            >
              Resume
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-24 md:py-36">
        <p className="text-teal-400 font-mono mb-4">Hi, my name is</p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Lokesh Siriganeni
        </h1>

        <h2 className="text-3xl md:text-5xl text-slate-400 font-bold mb-6">
          Building modern & scalable web applications.
        </h2>

        <p className="max-w-2xl text-slate-400 leading-8 text-lg mb-8">
          Full Stack Developer with 2+ years of experience building responsive
          enterprise-grade applications using React.js, Node.js, SQL, REST APIs
          and modern frontend architectures.
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["React", "Node.js", "SQL", "Tailwind", "REST APIs"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-teal-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 text-black rounded-lg font-semibold hover:bg-teal-400 transition"
          >
            View Projects
          </a>

          <a
            href="mailto:lokeshsiriganeni7288@gmail.com"
            className="px-6 py-3 border border-slate-700 rounded-lg hover:border-teal-400 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="bg-slate-900/40 border-y border-slate-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-400 transition">
              <div className="flex items-center gap-3 mb-6 text-teal-400">
                <Code2 size={28} />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-slate-950 rounded-lg text-sm border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-400 transition">
              <div className="flex items-center gap-3 mb-6 text-teal-400">
                <Layers size={28} />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-slate-950 rounded-lg text-sm border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-400 transition">
              <div className="flex items-center gap-3 mb-6 text-teal-400">
                <Database size={28} />
                <h3 className="text-xl font-bold">Database & Tools</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.databaseTools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-slate-950 rounded-lg text-sm border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-16">Experience</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-2">
            <button
              onClick={() => setActiveTab("accenture")}
              className={`px-5 py-3 rounded-lg transition ${
                activeTab === "accenture"
                  ? "bg-teal-500 text-black"
                  : "bg-slate-900 text-slate-300"
              }`}
            >
              Accenture
            </button>

            <button
              onClick={() => setActiveTab("gepl")}
              className={`px-5 py-3 rounded-lg transition ${
                activeTab === "gepl"
                  ? "bg-teal-500 text-black"
                  : "bg-slate-900 text-slate-300"
              }`}
            >
              GEPL Capital
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-8">
            {activeTab === "accenture" && (
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Web Developer @{" "}
                  <span className="text-teal-400">Accenture</span>
                </h3>

                <p className="text-slate-500 mb-6">
                  Sept 2025 – Present | Mumbai
                </p>

                <ul className="space-y-4 text-slate-300">
                  <li>▹ Built responsive enterprise e-commerce UI systems.</li>
                  <li>
                    ▹ Developed PLP & PDP architectures with filtering and
                    pagination.
                  </li>
                  <li>▹ Integrated Contentful CMS components.</li>
                  <li>
                    ▹ Improved performance using lazy loading and code
                    splitting.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "gepl" && (
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Web Developer @{" "}
                  <span className="text-teal-400">GEPL Capital</span>
                </h3>

                <p className="text-slate-500 mb-6">
                  June 2024 – Sept 2025 | Mumbai
                </p>

                <ul className="space-y-4 text-slate-300">
                  <li>
                    ▹ Developed internal ticketing systems using MERN stack.
                  </li>
                  <li>▹ Created secure JWT authentication flows.</li>
                  <li>▹ Designed SQL schemas and optimized queries.</li>
                  <li>▹ Built scalable APIs using Express.js.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="bg-slate-900/40 border-y border-slate-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 transition">
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <Briefcase className="text-teal-400" />

                  <a
                    href={externalLinks.mediaMarktProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400"
                  >
                    <ExternalLink />
                  </a>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  MediaMarkt & Saturn E-Commerce
                </h3>

                <p className="text-slate-400 mb-6">
                  Enterprise-grade e-commerce architecture handling millions of
                  users with dynamic product systems and optimized rendering.
                </p>

                <div className="flex flex-wrap gap-2 text-sm text-teal-400">
                  <span>React</span>
                  <span>Redux</span>
                  <span>REST APIs</span>
                  <span>Contentful</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 transition">
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <Terminal className="text-teal-400" />

                  <div className="flex gap-4"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Smart Help Ticketing
                </h3>

                <p className="text-slate-400 mb-6">
                  Internal support ticketing platform with CRUD, JWT
                  authentication, RBAC and dashboard systems.
                </p>

                <div className="flex flex-wrap gap-2 text-sm text-teal-400">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 transition">
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <Terminal className="text-teal-400" />

                  <div className="flex gap-4">
                    <a
                      href="https://geplcapital.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Gepl Capital</h3>

                <p className="text-slate-400 mb-6">
                Contributed to the development of the official GEPL Capital website, focusing on performance optimization, responsive design, and SEO improvements to enhance user experience and search engine visibility.

                </p>

                <div className="flex flex-wrap gap-2 text-sm text-teal-400">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 py-24 text-center"
      >
        <p className="text-teal-400 font-mono mb-3">What's Next?</p>

        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="max-w-2xl mx-auto text-slate-400 leading-8 mb-12">
          I’m open to new opportunities, collaborations and exciting full-stack
          development projects.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:lokeshsiriganeni7288@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-center gap-3 hover:border-teal-400 transition"
          >
            <Mail className="text-teal-400" />
            Email
          </a>

          <a
            href="tel:+917288952375"
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-center gap-3 hover:border-teal-400 transition"
          >
            <Phone className="text-teal-400" />
            Call
          </a>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-center gap-3">
            <MapPin className="text-teal-400" />
            Mumbai, India
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6">
          <a
            href={externalLinks.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 hover:-translate-y-1 transition"
          >
            <Github size={28} />
          </a>

          <a
            href={externalLinks.linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 hover:-translate-y-1 transition"
          >
            <Linkedin size={28} />
          </a>

          <a
            href={externalLinks.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 hover:-translate-y-1 transition"
          >
            <FileText size={28} />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>© 2026 Lokesh Siriganeni — Built with React & Tailwind CSS</p>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/917288952375"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:scale-110 transition p-4 rounded-full shadow-lg"
      >
        <Phone className="text-white" />
      </a>
    </div>
  );
}
