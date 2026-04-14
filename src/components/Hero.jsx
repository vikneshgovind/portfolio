import { FaArrowRight, FaDownload, FaMapMarkerAlt } from 'react-icons/fa'

import viknesh_profile from "../assets/images/Original-Image.png"
import viknesh_resume from "../assets/resume/Viknesh_Java_FullStack_Developer_Resume.pdf"

export default function Hero({ isDark }) {
  return (
    <div className='flex md:justify-evenly md:flex-row flex-col-reverse relative'>

        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[80px]" />
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-8 md:px-14 lg:px-20 -mt-24 sm:mt-0 pt-24 md:pt-16 pb-1 sm:pb-16 overflow-hidden"
        >

        <div className="relative z-10 max-w-3xl">

            {/* Badge */}
            <div className="mb-6 text-xs uppercase text-cyan-400">
            ● Available for opportunities
            </div>

            {/* Avatar + Location */}
            <div className="flex items-center gap-4 mb-6">

            <div className={`w-16 h-16 rounded-full flex items-center justify-center border 
                ${isDark ? 'bg-dark-card border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                <span className="text-cyan-400 font-bold text-xl">VG</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400">
                <FaMapMarkerAlt />
                Tamil Nadu, India
            </div>

            </div>

            {/* Name */}
            <h1 className={`text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Viknesh <span className="text-cyan-400">G.</span>
            </h1>

            {/* Role */}
            <p className="text-lg text-gray-400 mb-4">
            Full Stack Developer
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-8 max-w-md">
            I build scalable and responsive web applications using React, Node.js, Spring Boot
            and Java technologies. Passionate about clean UI and performance.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">

            <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:opacity-90"
            >
                View Projects <FaArrowRight />
            </button>

            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border rounded-lg text-gray-500 hover:text-cyan-400"
            >
                Contact
            </button>

            <button
                onClick={() => {
                    const link = document.createElement('a')
                    link.href = viknesh_resume
                    link.download = "Viknesh_Java_FullStack_Developer_Resume"
                    link.click()
                }}
                className="flex items-center gap-2 px-6 py-3 border rounded-lg text-gray-500 hover:text-amber-500"
            >
                <FaDownload /> Resume
            </button>

            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-10">
            <div>
                <div className="text-cyan-400 font-bold text-xl">2+</div>
                <div className="text-xs text-gray-400">Years Learning</div>
            </div>
            <div>
                <div className="text-cyan-400 font-bold text-xl">5+</div>
                <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div>
                <div className="text-cyan-400 font-bold text-xl">MCA</div>
                <div className="text-xs text-gray-400">Post Graduate</div>
            </div>
            </div>

        </div>
        </section>

        <div className='h-full mt-24 md:mt-0 flex-row md:text-center flex md:flex-col justify-center md:min-h-screen'>
           
            <div className=''>
                <img src={viknesh_profile} alt="Vicky Sparrow" className='h-80 w-80 rounded-full border-white border-4' />
            </div>
        </div>
    </div>
  )
}