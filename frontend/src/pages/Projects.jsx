import ProjectsGrid from '../components/Projects'

const projects = [
  {
    title: 'Portfolio API',
    description: 'FastAPI backend powering this portfolio with Medium RSS integration and project data endpoints.',
    tags: ['Python', 'FastAPI', 'feedparser'],
    github: 'https://github.com/manglam/portfolio',
    demo: null,
  },
  {
    title: 'Add your projects here',
    description: 'Update this list in frontend/src/pages/Projects.jsx with your real projects.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    github: null,
    demo: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="section-heading">Projects</h1>
      <p className="section-subheading">Things I've built, shipped, and learned from.</p>
      <ProjectsGrid items={projects} />
    </div>
  )
}
