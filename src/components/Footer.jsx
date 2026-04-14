import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export default function Footer({ isDark }) { 
  return (
    <footer
      className={`relative border-t px-8 md:px-14 lg:px-20 py-10 overflow-hidden
                   ${isDark ? 'border-dark-border bg-dark-surface' : 'border-gray-200 bg-gray-50'}`}
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r
                       from-transparent via-aqua/40 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
          <span className="font-syne font-black text-aqua text-lg px-2.5 py-0.5 rounded-lg
                            border border-aqua/25 bg-aqua/10">
            VG
          </span>
          <div>
            <p className={`font-syne font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Viknesh G — Full Stack Developer
            </p>
            <p className={`text-xs font-mono flex items-center gap-1.5 mt-0.5
                            ${isDark ? 'text-dark-muted' : 'text-gray-400'}`}>
              Built with <FaHeart size={11} className="text-coral fill-coral" /> in Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: 'mailto:rvikky05@gmail.com',          Icon: FiMail,     label: 'Email' },
            { href: 'https://github.com/vikneshgovind',   Icon: FaGithub,   label: 'GitHub' },
            { href: 'https://linkedin.com/in/viknesh2706', Icon: FaLinkedin, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center
                           transition-all duration-200 hover:-translate-y-0.5
                           ${isDark
                             ? 'border-dark-border text-dark-muted hover:border-aqua hover:text-aqua hover:bg-aqua/10'
                             : 'border-gray-200 text-gray-400 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'}`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <p className={`text-center text-xs font-mono mt-6 ${isDark ? 'text-dark-muted/50' : 'text-gray-300'}`}>
        © {new Date().getFullYear()} Viknesh G. All rights reserved.
      </p>
    </footer>
  )
}