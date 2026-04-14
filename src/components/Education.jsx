import { FaGraduationCap, FaAward, FaBookOpen } from 'react-icons/fa'

const EDU = [
  {
    period: '2024 — 2026',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Erode Arts and Science College',
    Icon: FaGraduationCap,
    color: 'from-aqua/[0.08]',
    badge: 'Post Graduate',
    badgeCls: 'text-aqua border-aqua/25 bg-aqua/[0.08]',
    iconBg: 'bg-aqua/10 text-aqua',
  },
  {
    period: '2020 — 2023',
    degree: 'B.Sc. Computer Technology',
    school: 'Erode Arts and Science College',
    Icon: FaBookOpen,
    color: 'from-sky-500/[0.08]',
    badge: 'Under Graduate',
    badgeCls: 'text-sky-400 border-sky-400/25 bg-sky-400/[0.08]',
    iconBg: 'bg-sky-400/10 text-sky-400',
  },
  {
    period: 'Certification',
    degree: 'Full Stack Web Development',
    school: 'Besant Technologies, Bangalore',
    Icon: FaAward,
    color: 'from-yellow-500/[0.08]',
    badge: 'Certified',
    badgeCls: 'text-yellow-400 border-yellow-400/25 bg-yellow-400/[0.08]',
    iconBg: 'bg-yellow-400/10 text-yellow-400',
  },
]

export default function Education({ isDark }) {
  const card = isDark
    ? 'bg-dark-card border-dark-border'
    : 'bg-white border-gray-200'

  return (
    <section id="education" className="px-8 md:px-14 lg:px-20 py-24 max-w-6xl mx-auto">

      <p className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-aqua mb-3">
        <span className="w-7 h-px bg-aqua/60" />
        My Background
      </p>

      <h2
        className={`font-syne font-black mb-14 ${isDark ? 'text-white' : 'text-gray-900'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
      >
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {EDU.map(({ period, degree, school, Icon, color, badge, badgeCls, iconBg }, i) => (
          <div
            key={degree}
            className={`group relative rounded-2xl border p-7 overflow-hidden transition ${card}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >

            {/* Hover Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent
                              opacity-0 group-hover:opacity-100 transition`} />

            <div className="relative z-10">

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}>
                <Icon size={20} />
              </div>

              {/* Badge */}
              <span className={`text-[10px] uppercase px-2 py-1 rounded-full border mb-3 inline-block ${badgeCls}`}>
                {badge}
              </span>

              {/* Period */}
              <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                {period}
              </p>

              {/* Degree */}
              <h3 className={`font-bold text-[1.05rem] mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {degree}
              </h3>

              {/* School */}
              <p className="text-sm text-gray-400">
                {school}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}