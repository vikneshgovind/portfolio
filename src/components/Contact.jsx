import { useState } from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoSend } from 'react-icons/io5'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md'

const LINKS = [
  {
    label: 'Gmail',
    value: 'vikneshgovind2706@gmail.com',
    Icon: MdEmail,
    href: 'mailto:vikneshgovind2706@gmail.com',
    iconBg: 'bg-blue-500/20',
    iconCol: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400/50 hover:bg-blue-500/[0.05]',
  },
  {
    label: 'GitHub',
    value: 'Viknesh G',
    Icon: FaGithub,
    href: 'https://github.com/vikneshgovind',
    iconBg: 'bg-purple-500/20',
    iconCol: 'text-purple-400',
    hoverBorder: 'hover:border-purple-400/50 hover:bg-purple-500/[0.05]',
  },
  {
    label: 'LinkedIn',
    value: 'VikneshGovind',
    Icon: FaLinkedin,
    href: 'https://linkedin.com/in/viknesh2706',
    iconBg: 'bg-pink-500/20',
    iconCol: 'text-pink-400',
    hoverBorder: 'hover:border-pink-400/50 hover:bg-pink-500/[0.05]',
  },
  // {
  //   label: 'Phone',
  //   value: '+91 80729 10343',
  //   Icon: FaPhone,
  //   href: 'tel:+918072910343',
  //   iconBg: 'bg-emerald-500/20',
  //   iconCol: 'text-emerald-400',
  //   hoverBorder: 'hover:border-emerald-400/50 hover:bg-emerald-500/[0.05]',
  // },
]

export default function Contact({ isDark }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    try {
      setLoading(true)
      await new Promise((res) => setTimeout(res, 1400))

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 4000)
    }
  }

  const inputBase = `w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition`

  const inputTheme = isDark
    ? 'border-gray-700 text-white bg-gray-900'
    : 'border-gray-200 text-gray-800 bg-gray-50'

  const card = isDark
    ? 'bg-gray-900 border-gray-700'
    : 'bg-white border-gray-200'

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold mb-10">Contact</h2>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className={`p-6 rounded-xl border ${card}`}>
          <h3 className="text-xl mb-4">Let's Connect</h3>

          <div className="grid grid-cols-2 gap-4">
            {LINKS.map(({ label, value, Icon, href, iconBg, iconCol, hoverBorder }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`p-4 border rounded-lg text-center transition ${hoverBorder}`}
              >
                <div className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full ${iconBg}`}>
                  <Icon size={18} className={iconCol} />
                </div>
                <p className="text-sm mt-2">{label}</p>
                <p className="text-xs text-gray-400">{value}</p>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={`p-6 rounded-xl border ${card}`}>
          <h3 className="text-xl mb-4">Send Message</h3>

          <form onSubmit={submit} className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange('name')}
              className={`${inputBase} ${inputTheme}`}
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange('email')}
              className={`${inputBase} ${inputTheme}`}
            />

            <textarea
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={handleChange('message')}
              className={`${inputBase} ${inputTheme}`}
            />

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-500">
                <AiFillCheckCircle /> Sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500">
                <MdError /> Fill all fields!
              </div>
            )}

            <button
              type="submit"
              className="py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2"
            >
              <IoSend /> Send
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}