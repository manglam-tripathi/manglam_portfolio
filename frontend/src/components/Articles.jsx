import { Link } from 'react-router-dom'
import useMediumArticles from '../hooks/useMediumArticles'

function ArticleCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col gap-3"
    >
      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-40 object-cover rounded-lg"
          loading="lazy"
        />
      )}
      <div>
        <p className="font-mono text-xs text-sky-400 mb-1">{article.pubDate}</p>
        <h3 className="text-base font-semibold text-white group-hover:text-sky-400 transition-colors leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
          {article.description}
        </p>
      </div>
      {article.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {article.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="tag">{cat}</span>
          ))}
        </div>
      )}
    </a>
  )
}

export default function ArticlesPreview() {
  const { articles, loading, error } = useMediumArticles({ limit: 3 })

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <h2 className="section-heading">Latest Articles</h2>
      <p className="section-subheading">Fresh from my Medium publication.</p>

      {loading && (
        <div className="grid sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card animate-pulse">
              <div className="h-40 bg-gray-800 rounded-lg mb-4" />
              <div className="h-4 bg-gray-800 rounded w-1/3 mb-3" />
              <div className="h-5 bg-gray-800 rounded w-full mb-2" />
              <div className="h-4 bg-gray-800 rounded w-5/6" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm">Could not load articles. {error}</p>
      )}

      {!loading && !error && (
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <ArticleCard key={article.link} article={article} />
          ))}
        </div>
      )}

      <Link to="/articles" className="btn-outline inline-block">All Articles â†’</Link>
    </section>
  )
}

