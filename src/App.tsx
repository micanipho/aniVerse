import './App.css'
import { Routes, Route } from 'react-router-dom'
import EmptyLayout from './layouts/empty'
import ClientLayout from './layouts/client'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <Routes>
      {/* Standalone auth pages (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Public routes (EmptyLayout with nav) */}
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<></>} />
      </Route>

      {/* Authenticated routes (ClientLayout with Anime/Manga/Search nav) */}
      <Route element={<ClientLayout />}>
        <Route path="/anime" element={<></>} />
        <Route path="/manga" element={<></>} />
        <Route path="/search" element={<></>} />
      </Route>
    </Routes>
  )}

export default App;
