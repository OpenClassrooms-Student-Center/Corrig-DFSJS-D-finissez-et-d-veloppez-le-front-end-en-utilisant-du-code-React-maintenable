import type { FC } from 'react'
import { Link } from 'react-router-dom'

/**
 * Page 404 - Erreur page non trouvée
 */
export const NotFound: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page non trouvée</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
