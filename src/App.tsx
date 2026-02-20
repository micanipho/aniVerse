import './App.css'
import { Routes, Route } from 'react-router-dom'
import EmptyLayout from './layouts/empty'
import ClientLayout from './layouts/client'
import Login from './pages/login'
import SignUp from './pages/signup'
import SearchResults from './pages/searchResults'
import Profile from './pages/profile'
import withAuth, { withGuest } from './hoc/withAuth'
import Home from './pages/home'

const ProtectedClientLayout = withAuth(ClientLayout)
const GuestLogin = withGuest(Login)
const GuestSignUp = withGuest(SignUp)

function App() {
  return (
    <Routes>
      {/* Standalone auth pages — authenticated users redirected to /search */}
      <Route path="/login" element={<GuestLogin />} />
      <Route path="/signup" element={<GuestSignUp />} />

      {/* Public routes (EmptyLayout with nav) */}
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authenticated routes — unauthenticated users redirected to /login */}
      <Route element={<ProtectedClientLayout />}>
        <Route path="/anime" element={<></>} />
        <Route path="/manga" element={<></>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )}

export default App

