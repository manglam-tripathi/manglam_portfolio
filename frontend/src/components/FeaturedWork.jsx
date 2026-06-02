import { Link } from 'react-router-dom'

const featured = [
  {
    title: 'Snake Game',
    description: 'A classic Snake game built and deployed on the web. Use arrow keys to navigate, eat food to grow, and avoid hitting the walls or yourself.',
    tags: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
    href: 'https://snake-game-8r3o.onrender.com',
  },
]

export default function FeaturedWork() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 divider">
      <h2 className="section-heading">Featured Work</h2>
      <p className="section-subheading">A handful of projects I'm proud of.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {featured.map((item) => (
          <div key={item.title} className="card group">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link to="/projects" className="btn-outline inline-block">All Projects →</Link>
    </section>
  )
}
