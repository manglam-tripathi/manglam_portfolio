import { FaServer, FaDatabase, FaBrain, FaPen, FaGamepad, FaGithub, FaMedium } from 'react-icons/fa'

const whatIDo = [
  {
    Icon: FaServer,
    title: 'Backend Engineering',
    desc: 'Designing scalable REST APIs and backend systems using Python and FastAPI. From data migration workflows to enterprise application architecture.',
  },
  {
    Icon: FaDatabase,
    title: 'Data & Governance',
    desc: 'Building intelligent data pipelines, anonymization workflows, and governance frameworks on Snowflake and Azure to ensure data quality and compliance.',
  },
  {
    Icon: FaBrain,
    title: 'GenAI & Agentic Systems',
    desc: 'Delivering GenAI accelerators and agentic workflows that drive real efficiency in data and engineering processes — not just demos, but production systems.',
  },
  {
    Icon: FaPen,
    title: 'Technical Writing',
    desc: 'Publishing on Medium about AI, software engineering, and data — one human-first story at a time. I build things and write about what I learn.',
  },
]

const stack = {
  Languages:       ['Python', 'SQL', 'JavaScript'],
  'Backend / APIs': ['FastAPI', 'REST APIs', 'Uvicorn'],
  'Data & Cloud':  ['Snowflake', 'Azure', 'PostgreSQL'],
  'AI / GenAI':    ['Generative AI', 'Agentic Workflows', 'LLMs'],
}

const currently = [
  'Building GenAI-driven data solutions at my current role',
  'Writing about AI & software engineering on Medium',
  'Open to interesting engineering conversations and collaborations',
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 space-y-20">

      {/* ── Intro ── */}
      <section>
        <p className="font-mono text-sky-500 dark:text-sky-400 text-sm tracking-widest uppercase mb-4">
          About Me
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          I build things.<br />Then I write about them.
        </h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
          <p>
            I'm Manglam Tripathi — a Software Engineer and Technical Writer specialising in
            backend systems, data engineering, and GenAI-driven solutions. I hold a degree in
            Computer Science and Engineering, and spend my days designing scalable systems
            that actually work in production.
          </p>
          <p>
            What makes me different? I don't just ship code — I document the journey.
            On Medium, I explore how AI is reshaping code, QA, and data workflows,
            told through a software engineer's lens.
          </p>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">What I Do</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Four areas I've gone deep on.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {whatIDo.map(({ Icon, title, desc }) => (
            <div key={title} className="card group flex gap-4">
              <div className="mt-1 shrink-0">
                <Icon
                  size={22}
                  className="text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tech Stack</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Tools and technologies I work with regularly.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="card">
              <h3 className="text-xs font-mono text-sky-500 dark:text-sky-400 mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Writing ── */}
      <section>
        <div className="card flex flex-col sm:flex-row items-start gap-5">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center">
            <FaMedium size={24} className="text-gray-800 dark:text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Writing on Medium</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              I explore how AI is reshaping software engineering — data workflows, QA, agentic systems —
              and share everything I learn along the way. Human-first, engineer-authored.
            </p>
            <a
              href="https://medium.com/@datajockeystreams"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm px-4 py-2"
            >
              <FaMedium size={14} /> Read on Medium
            </a>
          </div>
        </div>
      </section>

      {/* ── Beyond Code ── */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Beyond Code</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">There's life outside the terminal.</p>
        <div className="card flex gap-4 items-start">
          <div className="shrink-0 mt-1">
            <FaGamepad size={22} className="text-sky-500 dark:text-sky-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Gamer</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              When I'm not building or writing, I'm gaming. Steam profile coming soon —
              you'll find out what I actually play.
            </p>
          </div>
        </div>
      </section>

      {/* ── Currently ── */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Currently</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">What I'm up to right now.</p>
        <ul className="space-y-3">
          {currently.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://github.com/manglam-tripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manglam-tripathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's connect →
          </a>
        </div>
      </section>

    </div>
  )
}
