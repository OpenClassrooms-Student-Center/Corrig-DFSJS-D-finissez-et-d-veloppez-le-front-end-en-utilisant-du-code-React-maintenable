import type { FC } from 'react'

interface IndicatorProps {
  title: string
  value: number
  color: 'blue' | 'green' | 'yellow'
  className?: string
}

/**
 * Composant réutilisable pour afficher un indicateur statistique
 *
 * @param title - Le titre de l'indicateur
 * @param value - La valeur numérique à afficher
 * @param color - La couleur de la valeur (blue, green, yellow)
 * @param className - Classes Tailwind optionnelles appliquables au composant
 */
export const Indicator: FC<IndicatorProps> = ({
  title,
  value,
  color,
  className,
}) => {
  const colorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
  }

  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-4xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}
