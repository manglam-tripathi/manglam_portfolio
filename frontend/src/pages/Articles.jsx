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
        <p className="font-mono text-xs text-sky-500 dark:text-sky-400">{article.pubDate}</p>
        <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
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

function SkeletonCard() {
  return (
    <div className="card animate-pulse flex gap-5">
      <div className="w-28 h-28 bg-gray-200 dark:bg-gray-800 rounded-lg flex-shrink-0 hidden sm:block" />
      <div className="flex-1 space-y-3">
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-24" />
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
      </div>
    </div>
  )
}

export default function ArticlesPage() {
  const { articles, total, loading, loadingMore, error, hasMore, loadMore } =
    useMediumArticles({ pageSize: 10 })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="section-heading">Articles</h1>
      <p className="section-subheading">
        Everything I've published on{' '}
        <a
          href="https://medium.com/@datajockeystreams"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 dark:text-sky-400 hover:underline"
        >
          Medium
        </a>
        , fetched live.
      </p>

      {/* Initial load skeletons */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)}
        </div>
      )}

      {error && (
        <div className="card text-red-500 dark:text-red-400 text-sm">
          Failed to load articles: {error}. Check your backend or Medium username config.
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">
          No articles found. Make sure MEDIUM_USERNAME is set in the backend.
        </p>
      )}

      {!loading && !error && articles.length > 0 && (
        <>
          {/* Article count */}
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-6">
            Showing {articles.length} of {total} articles
          </p>

          <div className="space-y-4">
            {articles.map((a) => <ArticleCard key={a.link} article={a} />)}
          </div>

          {/* Load more skeletons while fetching next page */}
          {loadingMore && (
            <div className="space-y-4 mt-4">
              {[1, 2, 3].map((n) => <SkeletonCard key={n} />)}
            </div>
          )}

          {/* Load More button */}
          {hasMore && !loadingMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={loadMore}
                className="btn-outline px-8"
              >
                Load More ({total - articles.length} remaining)
              </button>
            </div>
          )}

          {/* All loaded */}
          {!hasMore && total > 0 && (
            <p className="mt-8 text-center text-xs font-mono text-gray-400 dark:text-gray-500">
              — all {total} articles loaded —
            </p>
          )}
        </>
      )}
    </div>
  )
}
