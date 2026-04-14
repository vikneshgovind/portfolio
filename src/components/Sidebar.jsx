import { useState, useEffect } from 'react'
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaGraduationCap,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaDownload,
  FaChevronRight,
} from 'react-icons/fa'

import viknesh_resume from "../assets/resume/Viknesh_Java_FullStack_Developer_Resume.pdf"

const NAV = [
  { id: 'hero',       label: 'Home',       Icon: FaHome },
  { id: 'skills',     label: 'Skills',     Icon: FaCode },
  { id: 'experience', label: 'Experience', Icon: FaBriefcase },
  { id: 'projects',   label: 'Projects',   Icon: FaFolderOpen },
  { id: 'education',  label: 'Education',  Icon: FaGraduationCap },
  { id: 'contact',    label: 'Contact',    Icon: FaEnvelope },
]

export default function Sidebar({ theme, onToggle }) {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState(false)

  const isDark = theme === 'dark'
  const isOpen = hovered || expanded

  useEffect(() => {
    const handler = () => {
      const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean)
      const current = sections.findLast(s => s.getBoundingClientRect().top <= 120)
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setExpanded(false)
  }

  const sidebarBase = `fixed top-0 left-0 h-full z-[200] flex flex-col
    border-r transition-all duration-300 overflow-hidden
    ${isDark ? 'bg-dark-surface border-dark-border' : 'bg-white border-gray-200 shadow-lg'}`

  const sidebarWidth = isOpen ? 'w-60' : 'w-[72px]'

  return (
    <>
      {/* Mobile Top Bar */}
      <header className={`fixed top-0 left-0 right-0 h-16 z-[300] flex items-center justify-between px-5 md:hidden backdrop-blur-xl border-b
        ${isDark ? 'bg-dark-surface/90 border-dark-border' : 'bg-white/90 border-gray-200'}`}>

        <button onClick={() => go('hero')} className="font-bold px-3 py-1 border rounded text-aqua">
          VG
        </button>

        <div className="flex gap-2">
          <button onClick={onToggle} className="p-2 border rounded">
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <button onClick={() => setExpanded(v => !v)} className="p-2 border rounded">
            {expanded ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {expanded && (
        <div className="fixed inset-0 bg-black/60 md:hidden" onClick={() => setExpanded(false)} />
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`${sidebarBase} ${sidebarWidth} hidden md:flex`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SidebarContent isOpen={isOpen} isDark={isDark} active={active} go={go} onToggle={onToggle} theme={theme} />
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`${sidebarBase} md:hidden top-16 ${expanded ? 'w-64' : 'w-0'}`}>
        <SidebarContent isOpen={expanded} isDark={isDark} active={active} go={go} onToggle={onToggle} theme={theme} />
      </aside>
    </>
  )
}

function SidebarContent({ isOpen, isDark, active, go, onToggle, theme }) {

  const labelCls = `transition-all duration-300 whitespace-nowrap
    ${isOpen ? 'opacity-100 ml-2' : 'opacity-0 hidden'}`

  return (
    <>
      {/* Logo */}
      <div onClick={() => go('hero')} className="flex items-center px-4 py-4 border-b cursor-pointer">
        <span className="font-bold text-aqua">VG</span>
        <span className={labelCls}>Viknesh G</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4">
        {NAV.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => go(id)}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition
                ${isActive ? 'bg-aqua/10 text-aqua' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Icon size={18} />
              <span className={labelCls}>{label}</span>
              <FaChevronRight className="ml-auto opacity-30" size={12} />
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t flex flex-col gap-2">

        <button className="flex items-center gap-2 p-2 bg-aqua text-black rounded">
          <FaDownload />
          <span className={labelCls} onClick={() => {
            const link = document.createElement('a')
            link.href = viknesh_resume
            link.download = "Viknesh_Java_FullStack_Developer_Resume"
            link.click()
          }}>Resume</span>
        </button>

        <button onClick={onToggle} className="flex items-center gap-2 p-2 border rounded">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
          <span className={labelCls}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>

      </div>
    </>
  )
}