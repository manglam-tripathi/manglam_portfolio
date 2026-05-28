import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/articles', label: 'Articles' },
  { to: '/about',    label: 'About Me' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300"
      style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sky-500 dark:text-sky-400 font-semibold text-lg tracking-tight">
          manglam<span className="text-gray-400 dark:text-gray-500">.</span>dev
        </NavLink>

        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-150"
          >
            {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
        </div>

        {/* Mobile row */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <button
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="sm:hidden px-4 py-3 space-y-3 transition-colors duration-300"
          style={{ borderTop: '1px solid var(--nav-border)', background: 'var(--nav-bg)' }}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-1 ${
                  isActive
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
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
