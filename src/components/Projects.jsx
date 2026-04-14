import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const PROJECTS = [
  {
    num: "01",
    name: "Sachdeva Roadlines",
    sub: "Logistics & Billing Management System",
    desc: "Desktop logistics application with Spring Boot REST APIs, billing workflows, payment tracking, Excel bulk upload, and PDF report generation. Features a real-time React dashboard for pending amounts and payment summaries.",
    stack: ["Java 17", "Spring Boot", "React (Vite)", "MySQL", "Electron"],
    gradient: "from-aqua/[0.08] via-transparent to-transparent",
    numCol: "text-aqua",
    border: "border-dark-border hover:border-aqua/40",
    glowCol: "rgba(127,255,212,0.08)",
  },
  {
    num: "02",
    name: "Navigational Cruise Tourist",
    sub: "Full Stack Booking Platform",
    desc: "Full-stack cruise booking platform with responsive React.js UI, RESTful Node.js/Express APIs, and MongoDB data management.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-violet-500/[0.08] via-transparent to-transparent",
    numCol: "text-violet-400",
    border: "border-dark-border hover:border-violet-400/40",
    glowCol: "rgba(167,139,250,0.08)",
  },
];

export default function Projects({ isDark }) {
  const card = isDark
    ? "bg-dark-card border-dark-border"
    : "bg-white border-gray-200";

  return (
    <section
      id="projects"
      className="px-8 md:px-14 lg:px-20 py-24 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <p className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-aqua mb-3">
        <span className="w-7 h-px bg-aqua/60" />
        What I've Built
      </p>

      <h2
        className={`font-syne font-black tracking-tight mb-14 leading-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
        style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
      >
        Projects
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map(
          (
            { num, name, sub, desc, stack, gradient, numCol, border, glowCol },
            i
          ) => (
            <div
              key={name}
              className={`reveal group relative rounded-2xl border p-8 overflow-hidden transition-all duration-300 ${card} ${border}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseMove={(e) => {
                if (!isDark) return;
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.background = `radial-gradient(
                  400px at ${e.clientX - r.left}px ${
                  e.clientY - r.top
                }px,
                  ${glowCol},
                  transparent 70%
                )`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "";
              }}
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10 flex flex-col h-full gap-4">
                {/* Number */}
                <div
                  className={`font-syne font-black text-5xl opacity-20 group-hover:opacity-40 transition ${numCol}`}
                >
                  {num}
                </div>

                {/* Title */}
                <div>
                  <h3
                    className={`font-syne font-bold text-xl ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {name}
                  </h3>
                  <p className={`text-xs font-mono ${numCol}`}>{sub}</p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px ${
                    isDark ? "bg-dark-border" : "bg-gray-100"
                  }`}
                />

                {/* Description */}
                <p
                  className={`text-sm flex-1 ${
                    isDark ? "text-dark-muted" : "text-gray-500"
                  }`}
                >
                  {desc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md font-mono border text-aqua border-aqua/20 bg-aqua/[0.07]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/vikneshgovind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      isDark
                        ? "text-dark-muted hover:text-aqua"
                        : "text-gray-500 hover:text-emerald-600"
                    }`}
                  >
                    <FaGithub size={16} />
                    View Code
                    <FiArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}