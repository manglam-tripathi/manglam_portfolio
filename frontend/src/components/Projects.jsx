const projects = [
  {
    title: 'Project Name',
    description: 'What the project does and why it matters. Keep it punchy.',
    tags: ['Python', 'FastAPI'],
    github: 'https://github.com/manglam',
    demo: null,
  },
]

export default function ProjectsGrid({ items = projects }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <div key={p.title} className="card flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="flex gap-3 mt-auto">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-1.5 px-3">
                GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-1.5 px-3">
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
