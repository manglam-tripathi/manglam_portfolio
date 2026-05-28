# Manglam Tripathi — Portfolio

Personal portfolio website for **Manglam Tripathi**, Software Engineer & Technical Writer.  
Built with a React + Vite frontend and a FastAPI backend.

---

## Live URLs

| Service | URL |
|---|---|
| **Portfolio (live)** | https://manglam-tripathi.github.io/manglam_portfolio/ |
| **Backend API (Render)** | https://your-app-name.onrender.com |
| **Medium** | https://medium.com/@datajockeystreams |
| **GitHub** | https://github.com/manglam-tripathi |
| **LinkedIn** | https://www.linkedin.com/in/manglam-tripathi/ |

> Update the Backend API URL above once your Render service is deployed.

---

## Local Development URLs

| Service | URL |
|---|---|
| Frontend (Vite dev server) | http://localhost:5173 |
| Backend (FastAPI) | http://localhost:8000 |
| API Docs (Swagger UI) | http://localhost:8000/docs |
| API Docs (ReDoc) | http://localhost:8000/redoc |
| Health Check | http://localhost:8000/api/health |
| Articles API | http://localhost:8000/api/articles?offset=0&limit=10 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router, Tailwind CSS |
| Icons | react-icons (Font Awesome) |
| Backend | Python, FastAPI, Uvicorn |
| Articles | Medium RSS via feedparser |
| Hosting (frontend) | GitHub Pages (via GitHub Actions) |
| Hosting (backend) | Render.com |

---

## Project Structure

```
manglam_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — auto-deploys frontend on push to main
├── frontend/
│   ├── public/
│   │   └── 404.html            # SPA routing fallback for GitHub Pages
│   ├── src/
│   │   ├── components/         # Navbar, Footer, Hero, FeaturedWork, Articles, Projects
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Dark/light mode toggle (persists in localStorage)
│   │   ├── hooks/
│   │   │   └── useMediumArticles.js  # Paginated Medium article fetching
│   │   ├── pages/              # Home, About, Articles, Projects
│   │   └── index.css           # CSS variables for theming + Tailwind
│   ├── .env.example            # Template for environment variables
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── main.py                 # FastAPI app entry point, CORS config
│   ├── requirements.txt
│   ├── routers/
│   │   ├── articles.py         # GET /api/articles?offset=&limit=
│   │   └── projects.py
│   ├── services/
│   │   └── medium_service.py   # Fetches + caches Medium RSS feed
│   └── models/
│       └── schemas.py          # Pydantic models (Article, PaginatedArticles, Project)
├── package.json                # Root — runs frontend + backend concurrently
└── README.md
```

---

## Prerequisites

Make sure you have these installed before running locally:

- **Node.js** v18 or higher — https://nodejs.org
- **Python** 3.10 or higher — https://python.org
- **pip** (comes with Python)
- **Git** — https://git-scm.com

Verify with:
```bash
node -v
python --version
pip --version
git --version
```

---

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/manglam-tripathi/manglam_portfolio.git
cd manglam_portfolio
```

### 2. Install frontend dependencies

```bash
npm run install:all
```

This installs root dependencies and all `frontend/` dependencies.

### 3. Install backend dependencies

```bash
pip install -r backend/requirements.txt
```

### 4. Set up backend environment variables

Create a `.env` file inside the `backend/` folder:

```bash
# backend/.env
MEDIUM_USERNAME=datajockeystreams
CACHE_TTL_SECONDS=600
ALLOWED_ORIGINS=http://localhost:5173
```

### 5. Run both frontend and backend together

```bash
npm run dev
```

This starts:
- **Frontend** at http://localhost:5173 (Vite dev server with hot reload)
- **Backend** at http://localhost:8000 (Uvicorn with auto-reload)

The Vite dev server proxies all `/api` requests to `localhost:8000` automatically — no extra config needed.

### Run them separately (optional)

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Default | Description |
|---|---|---|
| `MEDIUM_USERNAME` | _(required)_ | Your Medium username without `@` |
| `CACHE_TTL_SECONDS` | `600` | How long to cache Medium articles (seconds) |
| `ALLOWED_ORIGINS` | `http://localhost:5173` | Comma-separated list of allowed CORS origins |

Example for production:
```
MEDIUM_USERNAME=datajockeystreams
CACHE_TTL_SECONDS=600
ALLOWED_ORIGINS=http://localhost:5173,https://manglam-tripathi.github.io
```

### Frontend (`frontend/.env.local`)

| Variable | Default | Description |
|---|---|---|
| `VITE_API_BASE` | _(empty)_ | Backend base URL. Empty = use local Vite proxy |
| `VITE_BASE_PATH` | `/` | Base path for routing. Set to `/manglam_portfolio/` for GitHub Pages |

Example for local development — you don't need this file at all, the proxy handles it.  
Example for production build targeting GitHub Pages:
```
VITE_BASE_PATH=/manglam_portfolio/
VITE_API_BASE=https://your-app-name.onrender.com
```

---

## API Reference

### `GET /api/articles`

Fetches paginated Medium articles.

**Query params:**

| Param | Type | Default | Description |
|---|---|---|---|
| `offset` | int | `0` | Number of articles to skip |
| `limit` | int | `10` | Number of articles to return (max 50) |

**Example:**
```
GET /api/articles?offset=0&limit=10
GET /api/articles?offset=10&limit=10
```

**Response:**
```json
{
  "items": [...],
  "total": 25,
  "offset": 0,
  "limit": 10
}
```

### `GET /api/health`

```json
{ "status": "ok" }
```

---

## Deployment

### Backend — Render.com (free)

1. Sign up at https://render.com with GitHub
2. **New → Web Service** → connect `manglam_portfolio` repo
3. Fill in:

   | Field | Value |
   |---|---|
   | Root Directory | `backend` |
   | Runtime | `Python 3` |
   | Build Command | `pip install -r requirements.txt` |
   | Start Command | `uvicorn main:app --host 0.0.0.0 --port $PORT` |

4. Add **Environment Variables** on Render:

   | Key | Value |
   |---|---|
   | `MEDIUM_USERNAME` | `datajockeystreams` |
   | `CACHE_TTL_SECONDS` | `600` |
   | `ALLOWED_ORIGINS` | `https://manglam-tripathi.github.io` |

5. Deploy → copy your Render URL (e.g. `https://manglam-portfolio-api.onrender.com`)

> **Free tier note:** Render free services sleep after 15 min of inactivity. Add a free uptime monitor at https://uptimerobot.com that pings `/api/health` every 5 minutes to keep it awake. UptimeRobot free tier supports 50 monitors.

---

### Frontend — GitHub Pages (free, auto-deploys on push)

**One-time setup:**

1. GitHub repo → **Settings → Pages → Source → GitHub Actions**

2. GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:

   | Name | Value |
   |---|---|
   | `VITE_API_BASE` | `https://your-app-name.onrender.com` |

**Deploying:**

Every `git push` to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the React app and deploys it to GitHub Pages automatically.

To manually trigger: GitHub repo → **Actions → Deploy to GitHub Pages → Run workflow**

**Live URL:** https://manglam-tripathi.github.io/manglam_portfolio/

---

## Features

- Dark / Light mode toggle (persists across sessions)
- Paginated Medium articles (10 at a time, Load More)
- Responsive layout — mobile, tablet, desktop
- About Me page — skills, tech stack, writing, and more
- FastAPI backend with in-memory cache for Medium RSS
- Auto-deploy to GitHub Pages on every push to `main`

---

## Common Issues

**Articles not loading on live site**
- Make sure `VITE_API_BASE` GitHub secret is set to your Render URL
- Make sure `ALLOWED_ORIGINS` on Render includes `https://manglam-tripathi.github.io`
- Re-trigger a deploy after updating secrets: push any commit or use "Run workflow" in Actions

**Blank page after deploy**
- Check the Actions tab — the workflow must show a green checkmark on both `build` and `deploy` jobs
- Make sure Settings → Pages → Source is set to **GitHub Actions**

**Backend cold start (slow first load)**
- Render free tier sleeps after 15 min. Set up UptimeRobot to ping `/api/health` every 5 min

**Local: articles not showing**
- Make sure `backend/.env` has `MEDIUM_USERNAME=datajockeystreams`
- Make sure the backend is running (`npm run dev` starts both)
