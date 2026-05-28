import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/articles', label: 'Articles' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(5, 8, 15, 0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sky-400 font-semibold text-lg tracking-tight">
          manglam<span className="text-gray-500">.</span>dev
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-150 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden px-4 py-3 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(5,8,15,0.92)' }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-1 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
