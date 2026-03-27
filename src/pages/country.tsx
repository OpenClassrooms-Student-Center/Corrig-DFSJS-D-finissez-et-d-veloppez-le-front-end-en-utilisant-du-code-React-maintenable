import { useParams, Link, Navigate } from 'react-router-dom'
import {
  useOlympicData,
  calculateTotalMedals,
  calculateTotalAthletes,
} from '../hooks/useOlympicData'
import { Indicator } from '../components/indicator'
import { MedalsLineChart } from '../components/medals-line-chart'
import type { FC } from 'react'

/**
 * Page détail d'un pays
 *
 * Affiche les statistiques d'un pays et l'évolution de ses médailles
 */
export const Country: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: countries, isLoading } = useOlympicData()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Chargement des données...</div>
      </div>
    )
  }

  const country = countries.find((country) => country.id === Number(id))

  // Si le pays n'est pas trouvé après le chargement, rediriger vers la page 404
  if (!country) {
    return <Navigate to="/404" replace />
  }

  const totalMedals = calculateTotalMedals(country)
  const totalAthletes = calculateTotalAthletes(country)
  const totalParticipations = country.participations.length

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Retour au dashboard
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">{country.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Indicator
            title="Participations"
            value={totalParticipations}
            color="blue"
          />
          <Indicator
            title="Total médailles"
            value={totalMedals}
            color="yellow"
          />
          <Indicator
            title="Total athlètes"
            value={totalAthletes}
            color="green"
          />
        </div>

        <MedalsLineChart country={country} />

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  )
}
