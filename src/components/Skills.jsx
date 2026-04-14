import { FaCode, FaDesktop, FaServer, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa'

const SKILLS = [
  {
    Icon: FaCode,
    cat: 'Languages',
    color: 'from-amber-500/10 to-transparent',
    border: 'border-amber-500/20 hover:border-amber-400/50',
    iconCol: 'text-amber-400',
    tags: ['Java', 'JavaScript (ES6+)'],
  },
  {
    Icon: FaDesktop,
    cat: 'Frontend',
    color: 'from-sky-500/10 to-transparent',
    border: 'border-sky-500/20 hover:border-sky-400/50',
    iconCol: 'text-sky-400',
    tags: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    Icon: FaServer,
    cat: 'Backend',
    color: 'from-violet-500/10 to-transparent',
    border: 'border-violet-500/20 hover:border-violet-400/50',
    iconCol: 'text-violet-400',
    tags: ['Spring Boot', 'Node.js', 'Express.js', 'REST API'],
  },
  {
    Icon: FaDatabase,
    cat: 'Database',
    color: 'from-emerald-500/10 to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    iconCol: 'text-emerald-400',
    tags: ['MySQL', 'MongoDB', 'SQL Optimization'],
  },
  {
    Icon: FaTools,
    cat: 'Tools & DevOps',
    color: 'from-rose-500/10 to-transparent',
    border: 'border-rose-500/20 hover:border-rose-400/50',
    iconCol: 'text-rose-400',
    tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Intellij IDEA'],
  },
  {
    Icon: FaLightbulb,
    cat: 'Concepts',
    color: 'from-cyan-500/10 to-transparent',
    border: 'border-cyan-500/20 hover:border-cyan-400/50',
    iconCol: 'text-cyan-400',
    tags: ['OOP', 'MVC Architecture', 'CRUD', 'Agile'],
  },
]

export default function Skills({ isDark }) {
  const base = isDark
    ? 'bg-dark-card border-dark-border'
    : 'bg-white border-gray-200'

  return (
    <section id="skills" className="px-8 md:px-14 lg:px-20 py-20 max-w-6xl mx-auto">

      <p className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-aqua mb-3">
        <span className="w-7 h-px bg-aqua/60" />
        What I Know
      </p>

      <h2
        className={`font-syne font-black mb-14 ${isDark ? 'text-white' : 'text-gray-900'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
      >
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map(({ Icon, cat, color, border, iconCol, tags }, i) => (
          <div
            key={cat}
            className={`relative rounded-2xl border p-6 overflow-hidden transition group ${base} ${border}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >

            {/* Gradient hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0
              group-hover:opacity-100 transition duration-300`} />

            <div className="relative z-10">

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4
                ${isDark ? 'bg-dark-bg' : 'bg-gray-100'} ${iconCol}`}>
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className={`font-bold text-sm uppercase mb-4
                ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {cat}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded border text-cyan-400 border-cyan-400/20 bg-cyan-400/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}