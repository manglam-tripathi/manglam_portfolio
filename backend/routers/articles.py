from fastapi import APIRouter, Query, HTTPException
from services.medium_service import fetch_articles
from models.schemas import Article
import os

router = APIRouter(prefix="/api/articles", tags=["articles"])


@router.get("", response_model=list[Article])
def get_articles(limit: int = Query(default=10, ge=1, le=50)):
    username = os.getenv("MEDIUM_USERNAME", "")
    if not username:
        raise HTTPException(status_code=503, detail="MEDIUM_USERNAME is not configured")

    cache_ttl = int(os.getenv("CACHE_TTL_SECONDS", "600"))
    return fetch_articles(username=username, limit=limit, cache_ttl=cache_ttl)
