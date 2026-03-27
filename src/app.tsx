import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Country } from './pages/country'
import { NotFound } from './pages/not-found'
import type { FC } from 'react'

/**
 * Composant racine de l'application
 *
 * Définit le routing de l'application avec React Router
 */
export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
