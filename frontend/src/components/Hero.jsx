import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <p
        className="font-mono text-sky-500 dark:text-sky-400 text-sm mb-4 tracking-widest uppercase"
        style={{ animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}
      >
        Hi, I'm
      </p>

      <h1
        className="text-5xl sm:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white"
        style={{ animation: 'fadeSlideUp 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) forwards', opacity: 0 }}
      >
        Manglam Tripathi
      </h1>

      <h2
        className="text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6"
        style={{ animation: 'fadeIn 0.7s ease 300ms forwards', opacity: 0 }}
      >
        Software Engineer &amp; Technical Writer
      </h2>

      <p
        className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
        style={{ animation: 'fadeIn 0.7s ease 500ms forwards', opacity: 0 }}
      >
        I build scalable backend systems, explore GenAI-driven solutions, and write about
        the things I learn along the way on Medium.
      </p>

      <div
        className="flex flex-wrap gap-4"
        style={{ animation: 'fadeIn 0.7s ease 650ms forwards', opacity: 0 }}
      >
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/articles" className="btn-outline">Read Articles</Link>
      </div>
    </section>
  )
}
