import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/manglam-tripathi',
    Icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manglam-tripathi/',
    Icon: FaLinkedin,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@datajockeystreams',
    Icon: FaMedium,
  },
]

export default function Footer() {
  return (
    <footer className="py-10 mt-16 divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sky-500 dark:text-sky-400 text-sm">manglam.dev</p>

        <div className="flex gap-6">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-150"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        <p className="text-gray-400 dark:text-gray-600 text-xs">
          © {new Date().getFullYear()} Manglam Tripathi
        </p>
      </div>
    </footer>
  )
}
