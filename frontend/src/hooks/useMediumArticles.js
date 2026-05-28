import { useState, useEffect, useCallback } from 'react'

export default function useMediumArticles({ pageSize = 10 } = {}) {
  const [articles, setArticles]       = useState([])
  const [total, setTotal]             = useState(0)
  const [offset, setOffset]           = useState(0)
  const [loading, setLoading]         = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError]             = useState(null)

  const fetchPage = useCallback(async (currentOffset, isInitial) => {
    if (isInitial) setLoading(true)
    else setLoadingMore(true)

    try {
      const res = await fetch(`/api/articles?offset=${currentOffset}&limit=${pageSize}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()

      setTotal(data.total)
      setOffset(currentOffset + data.items.length)
      setArticles(prev => isInitial ? data.items : [...prev, ...data.items])
    } catch (err) {
      setError(err.message)
    } finally {
      if (isInitial) setLoading(false)
      else setLoadingMore(false)
    }
  }, [pageSize])

  useEffect(() => {
    fetchPage(0, true)
  }, [fetchPage])

  const loadMore = useCallback(() => {
    if (!loadingMore) fetchPage(offset, false)
  }, [loadingMore, offset, fetchPage])

  return {
    articles,
    total,
    loading,
    loadingMore,
    error,
    hasMore: offset < total,
    loadMore,
  }
}
