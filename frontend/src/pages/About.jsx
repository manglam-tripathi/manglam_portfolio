const skills = {
  'Languages':    ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  'Backend':      ['FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Redis'],
  'Frontend':     ['React', 'Vite', 'TailwindCSS'],
  'DevOps / ML':  ['Docker', 'GitHub Actions', 'PyTorch', 'scikit-learn'],
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="section-heading">About Me</h1>

      <div className="prose prose-invert max-w-none mb-12 space-y-4 text-gray-300 leading-relaxed">
        <p>
          I'm Manglam Tripathi â€” a software engineer who loves building things that
          work reliably at scale. I spend most of my time on backend systems and
          occasionally venture into ML/AI territory when something interesting crosses
          my path.
        </p>
        <p>
          When I'm not shipping code I'm writing about it on Medium, where I try to
          make complex topics approachable for other engineers.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card">
            <h3 className="text-sm font-mono text-sky-400 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

