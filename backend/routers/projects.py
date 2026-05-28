from fastapi import APIRouter
from models.schemas import Project

router = APIRouter(prefix="/api/projects", tags=["projects"])

# Static project list — update this or replace with a DB later
_PROJECTS: list[Project] = [
    Project(
        title="Portfolio API",
        description="FastAPI backend powering this portfolio site.",
        tags=["Python", "FastAPI", "feedparser"],
        github="https://github.com/manglam/portfolio",
    ),
]


@router.get("", response_model=list[Project])
def get_projects():
    return _PROJECTS
