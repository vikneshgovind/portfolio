import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

const EXP = [
  {
    company: 'Blackstone Informatics',
    role: 'MERN Stack Front-End Intern',
    period: '2024',
    location: 'Coimbatore',
    type: 'Internship',
    color: 'from-cyan-500/20 to-emerald-500/10',
    accentCol: 'text-cyan-400',
    dotCol: 'bg-cyan-400',
    bullets: [
      'Built responsive web pages and reusable UI components using React.js, HTML5, CSS3, and JavaScript',
      'Improved frontend UX through performance optimization and component-level code refactoring',
      'Collaborated with backend teams on API integration and real-time project workflows',
    ],
  },
  {
    company: 'Wipro private limited',
    role: 'Generative AI Training',
    period: '2025',
    location: 'Hyderabad',
    type: 'Internship',
    color: 'from-pink-500/20 to-slate-600/10',
    accentCol: 'text-pink-400',
    dotCol: 'bg-pink-400',
    bullets: [
      'I had the incredible opportunity to work on a project titled "Transcript Generator"',
      'Real-world project development exposure',
      'Problem-solving and analytical thinking',
      'Professional work environment experience',
      'Guidance from industry experts at Wipro',
    ],
  },
  {
    company: 'Besant Technologies',
    role: 'Full Stack Web Development Training',
    period: '6 Months',
    location: 'Bangalore',
    type: 'Training',
    color: 'from-violet-500/15 to-sky-500/10',
    accentCol: 'text-violet-400',
    dotCol: 'bg-violet-400',
    bullets: [
      'Intensive training in Java, Spring Boot, React, Node.js, SQL, Git & JavaScript',
      'Gained hands-on experience across the full stack development lifecycle',
    ],
  },
]

export default function Experience({ isDark }) {
  const card = isDark
    ? 'bg-dark-card border-dark-border'
    : 'bg-white border-gray-200'

  return (
    <section id="experience" className="px-8 md:px-14 lg:px-20 py-24 max-w-6xl mx-auto">

      <p className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-aqua mb-3">
        <span className="w-7 h-px bg-aqua/60" />
        Where I've Worked
      </p>

      <h2
        className={`font-syne font-black mb-14 ${isDark ? 'text-white' : 'text-gray-900'} `}
        style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
      >
        Experience
      </h2>

      <div className="relative">

        {/* Timeline line */}
        <div className={`absolute left-6 top-0 bottom-0 w-px hidden md:block
          ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`} />

        <div className="flex flex-col gap-8">
          {EXP.map(({ company, role, period, location, type, color, accentCol, dotCol, bullets }, i) => (
            <div key={company} className="flex gap-8">

              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${dotCol}/20 border-2 ${accentCol}
                  flex items-center justify-center font-bold text-sm`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Card */}
              <div className={`flex-1 rounded-2xl border p-7 relative overflow-hidden group ${card}`}>

                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0
                  group-hover:opacity-100 transition`} />

                <div className="relative z-10">

                  {/* Header */}
                  <div className="flex flex-wrap justify-between mb-4 gap-3">

                    <div>
                      <span className={`text-xs px-2 py-1 border rounded ${accentCol}`}>
                        {type}
                      </span>

                      <h3 className={`text-xl font-bold mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {company}
                      </h3>

                      <p className={`${accentCol} text-sm`}>{role}</p>
                    </div>

                    <div className="text-xs text-gray-400 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <FaCalendarAlt size={12} /> {period}
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <FaMapMarkerAlt size={12} /> {location}
                      </div>
                    </div>

                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 mt-4">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <FaCheckCircle className={`${accentCol}`} size={14} />
                        <span className="text-sm text-gray-500">{b}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}