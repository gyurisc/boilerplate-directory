import { ExternalLink } from "lucide-react"
import type { Boilerplate } from "@/types/boilerplate"

interface BoilerplateCardProps {
  boilerplate: Boilerplate
}

export function BoilerplateCard({ boilerplate }: BoilerplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      {boilerplate.image && (
        <div className="h-[200px] relative">
          <img
            src={boilerplate.image}
            alt={boilerplate.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{boilerplate.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{boilerplate.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {boilerplate.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={boilerplate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-auto"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
} 