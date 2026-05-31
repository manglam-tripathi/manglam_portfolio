import html
import re
import time
import feedparser
from models.schemas import Article

_cache: dict = {"data": None, "ts": 0}


def _strip_html(text: str) -> str:
    clean = re.sub(r"<[^>]+>", " ", text or "")
    clean = re.sub(r"\s+", " ", clean).strip()
    return html.unescape(clean)


def _extract_thumbnail(entry) -> str | None:
    content = ""
    if hasattr(entry, "content"):
        content = entry.content[0].get("value", "") if entry.content else ""
    elif hasattr(entry, "summary"):
        content = entry.summary or ""
    match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    return match.group(1) if match else None


def fetch_all_articles(username: str, cache_ttl: int = 600) -> list[Article]:
    """Fetch and cache all Medium articles for a username."""
    global _cache

    if _cache["data"] is not None and (time.time() - _cache["ts"]) < cache_ttl:
        return _cache["data"]

    feed_url = f"https://medium.com/feed/@{username}"
    feed = feedparser.parse(feed_url)

    articles: list[Article] = []
    for entry in feed.entries:
        pub = entry.get("published", entry.get("updated", ""))
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
            title=html.unescape(entry.get("title", "Untitled")),
            link=entry.get("link", ""),
            pubDate=pub,
            description=summary,
            thumbnail=_extract_thumbnail(entry),
            categories=[tag.term for tag in entry.get("tags", [])],
        ))

    _cache["data"] = articles
    _cache["ts"] = time.time()
    return articles
