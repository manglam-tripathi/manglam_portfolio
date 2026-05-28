from pydantic import BaseModel
from typing import Optional


class Article(BaseModel):
    title: str
    link: str
    pubDate: str
    description: Optional[str] = None
    thumbnail: Optional[str] = None
    categories: list[str] = []


class PaginatedArticles(BaseModel):
    items: list[Article]
    total: int
    offset: int
    limit: int


class Project(BaseModel):
    title: str
    description: str
    tags: list[str] = []
    github: Optional[str] = None
    demo: Optional[str] = None
