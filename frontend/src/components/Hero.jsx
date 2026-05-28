import { Link } from 'react-router-dom'

const NAME = 'Manglam Tripathi'

export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20 overflow-hidden">

      {/* Ambient glow orbs */}
      <div
        className="glow-orb"
        style={{ width: 420, height: 420, top: -120, left: -80,
                 background: 'rgba(14, 165, 233, 0.12)' }}
      />
      <div
        className="glow-orb"
        style={{ width: 280, height: 280, top: 40, right: -60,
                 background: 'rgba(139, 92, 246, 0.09)',
                 animationDelay: '3s' }}
      />

      {/* Greeting — fades in */}
      <p
        className="font-mono text-sky-400 text-sm mb-4 tracking-widest uppercase"
        style={{ animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}
      >
        Hi, I'm
      </p>

      {/* Name — each character slides up with stagger, gradient applied per-span */}
      <h1
        className="text-5xl sm:text-6xl font-bold leading-tight mb-4"
        aria-label={NAME}
      >
        {NAME.split('').map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              background: 'linear-gradient(135deg, #ffffff 30%, #7dd3fc 75%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0,
              animation: `fadeSlideUp 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) ${i * 38}ms forwards`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Role — fades in after name finishes */}
      <h2
        className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6"
        style={{ animation: 'fadeIn 0.7s ease 700ms forwards', opacity: 0 }}
      >
        Software Engineer &amp; Technical Writer
      </h2>

      {/* Bio */}
      <p
        className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
        style={{ animation: 'fadeIn 0.7s ease 900ms forwards', opacity: 0 }}
      >
        I build scalable backend systems, explore ML/AI applications, and write about
        the things I learn along the way on Medium.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4"
        style={{ animation: 'fadeIn 0.7s ease 1050ms forwards', opacity: 0 }}
      >
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/articles" className="btn-outline">Read Articles</Link>
      </div>
    </section>
  )
}
