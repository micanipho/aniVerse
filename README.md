# AniVerse 🎌

> Discover, track, and rate your favourite anime — a modern platform powered by the [Jikan API](https://jikan.moe/) (MyAnimeList).

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
  - [Routing](#routing)
  - [State Management](#state-management)
  - [Authentication](#authentication)
  - [Layouts](#layouts)
  - [Jikan API Integration](#jikan-api-integration)
- [Milestones](#milestones)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

AniVerse is a full-featured anime discovery and tracking web application. It consumes the **Jikan REST API v4** — a free, open-source interface to MyAnimeList data — to serve browsing, search, and detailed anime information.

The app follows a clean three-portal architecture (public, user, admin), with each domain isolated in its own provider using the Context API + `redux-actions` + `useReducer` pattern. Route protection is handled by the `withAuth` Higher-Order Component.

---

## Features

### Public (No Login Required)
- 🏠 **Home page** — trending and seasonal anime showcases
- 🔍 **Browse** — paginated anime catalogue with genre, status, and score filters
- 🔎 **Search** — real-time title search with URL-persisted query params
- 📄 **Anime detail** — full synopsis, info grid, score, genres, and studios

### User Portal (Login Required)
- 📋 **Watchlist** — add, remove, and categorise anime (Watching / Completed / Plan to Watch)
- ❤️ **Favourites** — curate a personal favourites collection
- ⭐ **Ratings** — score anime and review your full rating history

### Admin Portal (Admin Role Required)
- 📊 **Dashboard** — platform-wide stats (users, watchlist entries, top-rated anime)
- 🗂️ **Anime management** — feature, hide, or label anime with platform metadata
- 👥 **User management** — view, edit roles, and deactivate user accounts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.7 |
| Build Tool | Vite 6 |
| UI Library | Ant Design 5 |
| Styling | antd-style (CSS-in-JS via `createStyles`) |
| Routing | React Router v7 |
| State | Context API + redux-actions + useReducer |
| HTTP | Axios |
| External API | Jikan REST API v4 (api.jikan.moe/v4) |
| Linting | ESLint + typescript-eslint |

---

## Project Structure

```
src/
├── components/
│   └── navbar/
│       ├── navbar.tsx              # Top navigation bar
│       └── style/
│           └── style.ts            # antd-style createStyles
│
├── hoc/
│   └── withAuth.tsx                # Role-based route protection HOC
│
├── layouts/
│   ├── public.tsx                  # Public shell (Header + Outlet + Footer)
│   ├── user.tsx                    # User portal (Sider/Menu + Outlet)
│   └── admin.tsx                   # Admin portal (fixed Sider + Header + Outlet)
│
├── pages/
│   ├── login/                      # Login page
│   ├── home/                       # Trending & seasonal anime home
│   ├── animeList/                  # Paginated browse with filters
│   ├── animeDetail/                # Full anime info + user actions
│   ├── searchResults/              # Search with URL query persistence
│   ├── watchlist/                  # User watchlist management
│   ├── favourites/                 # User favourites collection
│   ├── ratings/                    # User ratings table
│   ├── adminDashboard/             # Admin stats overview
│   ├── adminAnime/                 # Anime metadata management
│   └── adminUsers/                 # User CRUD management
│
├── providers/
│   ├── animeProvider/
│   │   ├── context.tsx             # IAnime, IAnimeStateContext, IAnimeActionContext
│   │   ├── actions.tsx             # createAction creators (PENDING/SUCCESS/ERROR)
│   │   ├── reducer.tsx             # handleActions reducer
│   │   └── index.tsx               # Provider + useAnimeState / useAnimeActions hooks
│   └── userProvider/
│       ├── context.tsx             # IUser, IUserStateContext, IUserActionContext
│       ├── actions.tsx
│       ├── reducer.tsx
│       └── index.tsx               # Provider + useUserState / useUserActions hooks
│
├── routes/
│   ├── public.routes.tsx           # Lazy-loaded public route config array
│   ├── user.routes.tsx             # Lazy-loaded user route config array
│   ├── admin.routes.tsx            # Lazy-loaded admin route config array
│   └── index.tsx                   # Barrel export
│
├── styles/
│   ├── theme.ts                    # Ant Design ConfigProvider token overrides
│   └── shared.ts                   # Shared antd-style utilities (card, badge, tag)
│
├── utils/
│   └── axiosInstance.tsx           # Axios factory (authenticated + public instances)
│
├── App.tsx                         # Route tree (Routes / Route / Outlet)
├── main.tsx                        # Entry — BrowserRouter + ConfigProvider + providers
└── index.css                       # Global resets
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 20.0.0
- **npm** >= 8.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/animex.git
cd animex

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env — at minimum set VITE_JIKAN_BASE_URL

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:3001**

### Default Dev Credentials

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `admin` |
| User | `user` | `user` |

> ⚠️ Dev-only defaults. Production login authenticates against your backend API.

---

## Environment Variables

Create a `.env` file in the project root. See `.env.example` for the full list.

```env
# Required — Jikan public API base URL (no auth needed for public endpoints)
VITE_JIKAN_BASE_URL=https://api.jikan.moe/v4

# Required — Your backend API base URL (for auth, watchlist, ratings)
VITE_BACKEND_API_URL=http://localhost:8080/api

# Optional — WebSocket endpoint (for future real-time features)
VITE_WS_URL=ws://localhost:8080/ws
```

> All client-side env vars must be prefixed with `VITE_` to be exposed by Vite.

---

## Available Scripts

```bash
npm run dev        # Start dev server on port 3001 (hot reload)
npm run build      # Type-check + production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # Run ESLint across all .ts / .tsx files
```

---

## Architecture

### Routing

AnimeX uses **React Router v7** with a nested route tree in `App.tsx`. Route configs for each section live in `src/routes/` as plain arrays of `{ path, element, icon, name }` — consumed by both the router and sidebar `<Menu>` components.

```
/                               → PublicLayout
  index                         → <HomePage />
  anime                         → <AnimeListPage />
  anime/:id                     → <AnimeDetailPage />
  search                        → <SearchResultsPage />
  login                         → <LoginPage />

/user                           → ProtectedUserLayout  (roles: user, admin)
  index                         → <WatchlistPage />
  favourites                    → <FavouritesPage />
  ratings                       → <RatingsPage />

/admin                          → ProtectedAdminLayout  (role: admin)
  index                         → <AdminDashboard />
  anime                         → <AdminAnimePage />
  users                         → <AdminUsersPage />
```

All page components are **lazy-loaded** with `React.lazy()` and wrapped in `<Suspense>` inside each layout.

### State Management

Each feature domain uses an isolated four-file provider pattern:

```
context.tsx   →  TypeScript interfaces + createContext (state + actions separately)
actions.tsx   →  createAction creators — PENDING / SUCCESS / ERROR for each operation
reducer.tsx   →  handleActions spreading action.payload onto state
index.tsx     →  Provider component (useReducer) + exported custom hooks
```

**Usage example:**

```tsx
// In a page component
const { animeList, isPending, isError } = useAnimeState();
const { getAnimeList } = useAnimeActions();

useEffect(() => {
  getAnimeList({ page: 1 });
}, []);
```

**Action naming convention:** Every async operation has three action types:

```
GET_ANIME_LIST_PENDING   →  { isPending: true,  isSuccess: false, isError: false }
GET_ANIME_LIST_SUCCESS   →  { isPending: false, isSuccess: true,  isError: false, animeList: [...] }
GET_ANIME_LIST_ERROR     →  { isPending: false, isSuccess: false, isError: true  }
```

### Authentication

Route protection is handled by the `withAuth` Higher-Order Component (`src/hoc/withAuth.tsx`).

```tsx
// In App.tsx
const ProtectedUserLayout  = withAuth(UserLayout,  { allowedRoles: ['user', 'admin'] });
const ProtectedAdminLayout = withAuth(AdminLayout, { allowedRoles: ['admin'] });
```

`withAuth` reads `auth_token` and `user_role` from `localStorage`:

| Condition | Behaviour |
|---|---|
| No `auth_token` | Redirect to `/login` |
| Wrong role (user hitting `/admin`) | Redirect to `/user` |
| Wrong role (admin hitting `/user`) | Redirect to `/admin` |
| Unauthenticated on `/` routes | Allowed — public layout |

The `UserProvider`'s `login` action stores the token and role on success; `logout` clears `localStorage` and resets state.

### Layouts

| Layout | Path Prefix | Description |
|---|---|---|
| `PublicLayout` | `/` | Full-width shell for unauthenticated browsing |
| `UserLayout` | `/user` | Sidebar nav + content for authenticated users |
| `AdminLayout` | `/admin` | Fixed dark sidebar + header for admin operations |

All layouts use `theme.useToken()` for dynamic Ant Design colour tokens and colocated `style/style.ts` files with `createStyles` from `antd-style`.

### Jikan API Integration

AnimeX consumes the **Jikan REST API v4** — a rate-limited (3 req/s) open API that wraps MyAnimeList data. No API key is required for public endpoints.

Key endpoints used:

| Action | Endpoint |
|---|---|
| Top anime | `GET /top/anime` |
| Seasonal anime | `GET /seasons/now` |
| Anime list (filtered) | `GET /anime?genre=&status=&order_by=` |
| Single anime | `GET /anime/:id` |
| Search | `GET /anime?q=<query>` |

All Jikan calls use `getPublicAxiosInstance()` — a separate axios instance with no auth header. Authenticated calls (watchlist, ratings) use `getAxiosInstance()` pointing to your backend.

---

## Milestones

| Milestone | Issues | Description |
|---|---|---|
| **1 — Foundation** | #1–#4 | Scaffold, axios, routing, withAuth |
| **2 — Core Structure** | #5–#9 | Layouts, Navbar, providers, Login page |
| **3 — Feature Pages** | #10–#17 | All user-facing pages + theming |
| **4 — Admin & Polish** | #18–#21 | Admin pages + code splitting |

See [animex-github-issues.md](./animex-github-issues.md) for the full issue breakdown.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes — run `npm run lint` before committing
4. Commit with a descriptive message: `git commit -m 'feat: add anime detail page'`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request against `main`

Follow the existing provider pattern when adding new feature domains — each domain gets its own `context.tsx`, `actions.tsx`, `reducer.tsx`, and `index.tsx`.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for anime fans everywhere · Powered by <a href="https://jikan.moe/">Jikan API</a>
</p>
