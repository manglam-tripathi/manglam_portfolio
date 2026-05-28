import re
import time
import feedparser
from functools import lru_cache
from models.schemas import Article

_cache: dict = {"data": None, "ts": 0}


def _strip_html(text: str) -> str:
    """Remove HTML tags and collapse whitespace."""
    clean = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", clean).strip()


def _extract_thumbnail(entry) -> str | None:
    """Pull the first <img> src out of the entry content."""
    content = ""
    if hasattr(entry, "content"):
        content = entry.content[0].get("value", "") if entry.content else ""
    elif hasattr(entry, "summary"):
        content = entry.summary or ""

    match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    return match.group(1) if match else None


def fetch_articles(username: str, limit: int = 10, cache_ttl: int = 600) -> list[Article]:
    """Return parsed Medium articles, using an in-process time-based cache."""
    global _cache

    if _cache["data"] is not None and (time.time() - _cache["ts"]) < cache_ttl:
        return _cache["data"][:limit]

    feed_url = f"https://medium.com/feed/@{username}"
    feed = feedparser.parse(feed_url)

    articles: list[Article] = []
    for entry in feed.entries:
        pub = entry.get("published", entry.get("updated", ""))
        # format: "Thu, 01 Jan 2026 00:00:00 GMT" → "Jan 1, 2026"
        try:
            from email.utils import parsedate
            from datetime import date
            parsed = parsedate(pub)
            if parsed:
                pub = date(*parsed[:3]).strftime("%b %d, %Y")
        except Exception:
            pass

        summary = _strip_html(entry.get("summary", ""))[:300]

        articles.append(Article(
            title=entry.get("title", "Untitled"),
            link=entry.get("link", ""),
            pubDate=pub,
            description=summary,
            thumbnail=_extract_thumbnail(entry),
            categories=[tag.term for tag in entry.get("tags", [])],
        ))

    _cache["data"] = articles
    _cache["ts"] = time.time()
    return articles[:limit]
