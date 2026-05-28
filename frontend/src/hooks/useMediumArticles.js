import { useState, useEffect } from 'react'

const CACHE_KEY = 'medium_articles_cache'
const CACHE_TTL_MS = 10 * 60 * 1000 // 10 minutes

function getCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts < CACHE_TTL_MS) return data
  } catch {
    // ignore corrupt cache
  }
  return null
}

function setCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {
    // ignore storage errors
  }
}

export default function useMediumArticles({ limit = 10 } = {}) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchArticles() {
      const cached = getCache()
      if (cached) {
        if (!cancelled) {
          setArticles(cached.slice(0, limit))
          setLoading(false)
        }
        return
      }

      try {
        const res = await fetch(`/api/articles?limit=${limit}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setCache(data)
        if (!cancelled) {
          setArticles(data.slice(0, limit))
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchArticles()
    return () => { cancelled = true }
  }, [limit])

  return { articles, loading, error }
}
