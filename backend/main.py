import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routers import articles, projects

load_dotenv()

app = FastAPI(title="Manglam Portfolio API", version="1.0.0")

origins = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(articles.router)
app.include_router(projects.router)


@app.get("/api/health")
def health():
    return {"status": "ok"}
