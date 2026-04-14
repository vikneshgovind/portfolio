import React from 'react'
import './App.css'

import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'
import Sidebar    from './components/Sidebar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollReveal()

  const isDark = theme === 'dark'

  return (
    <div
      className={`min-h-screen transition-colors duration-300
                   ${isDark ? 'bg-dark-bg text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Sidebar */}
      <Sidebar theme={theme} onToggle={toggle} />

      {/* Page content — offset for sidebar on desktop */}
      <div className="md:ml-[72px]">
        <Hero       isDark={isDark} />
        <Skills     isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects   isDark={isDark} />
        <Education  isDark={isDark} />
        <Contact    isDark={isDark} />
        <Footer     isDark={isDark} />
      </div>
    </div>
  )
}
