import ProjectsGrid from '../components/Projects'

const projects = [
  {
    title: 'Snake Game',
    description: 'A classic Snake game built and deployed on the web. Use arrow keys to navigate, eat food to grow, and avoid hitting the walls or yourself.',
    tags: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
    github: 'https://github.com/manglam-tripathi/Snake-Game',
    demo: 'https://snake-game-8r3o.onrender.com',
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
