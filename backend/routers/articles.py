from fastapi import APIRouter, Query, HTTPException
from services.medium_service import fetch_all_articles
from models.schemas import PaginatedArticles
import os

router = APIRouter(prefix="/api/articles", tags=["articles"])


@router.get("", response_model=PaginatedArticles)
def get_articles(
    offset: int = Query(default=0, ge=0),
    limit: int = Query(default=10, ge=1, le=50),
):
    username = os.getenv("MEDIUM_USERNAME", "")
    if not username:
        raise HTTPException(status_code=503, detail="MEDIUM_USERNAME is not configured")

    cache_ttl = int(os.getenv("CACHE_TTL_SECONDS", "600"))
    all_articles = fetch_all_articles(username=username, cache_ttl=cache_ttl)

    total = len(all_articles)
    items = all_articles[offset: offset + limit]

    return PaginatedArticles(items=items, total=total, offset=offset, limit=limit)
