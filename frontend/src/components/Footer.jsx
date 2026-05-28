const socials = [
  { label: 'GitHub',   href: 'https://github.com/manglam' },
  { label: 'Medium',   href: 'https://medium.com/@datajockeystreams' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/manglam' },
  { label: 'Twitter',  href: 'https://twitter.com/manglam' },
]

export default function Footer() {
  return (
    <footer className="py-10 mt-16" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sky-400 text-sm">manglam.dev</p>
        <div className="flex gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Manglam Tripathi
        </p>
      </div>
    </footer>
  )
}
