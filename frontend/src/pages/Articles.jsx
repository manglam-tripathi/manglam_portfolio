import useMediumArticles from '../hooks/useMediumArticles'

function ArticleCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex gap-5"
    >
      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-28 h-28 object-cover rounded-lg flex-shrink-0 hidden sm:block"
          loading="lazy"
        />
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <p className="font-mono text-xs text-sky-400">{article.pubDate}</p>
        <h2 className="text-base font-semibold text-white group-hover:text-sky-400 transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {article.description}
        </p>
        {article.categories?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {article.categories.slice(0, 4).map((cat) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}

export default function ArticlesPage() {
  const { articles, loading, error } = useMediumArticles({ limit: 50 })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="section-heading">Articles</h1>
      <p className="section-subheading">
        Everything I've published on{' '}
        <a
          href="https://medium.com/@datajockeystreams"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline"
        >
          Medium
        </a>
        , fetched live.
      </p>

      {loading && (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="card animate-pulse flex gap-5">
              <div className="w-28 h-28 bg-gray-800 rounded-lg flex-shrink-0 hidden sm:block" />
              <div className="flex-1 space-y-3">
                <div className="h-3 bg-gray-800 rounded w-24" />
                <div className="h-5 bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-800 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="card border-red-900 text-red-400 text-sm">
          Failed to load articles: {error}. Check your backend or Medium username config.
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-gray-500">No articles found. Make sure MEDIUM_USERNAME is set in the backend.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className="space-y-4">
          {articles.map((a) => <ArticleCard key={a.link} article={a} />)}
        </div>
      )}
    </div>
  )
}

