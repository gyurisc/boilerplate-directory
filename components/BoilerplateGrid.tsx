import type { Boilerplate } from "@/types/boilerplate"
import { BoilerplateCard } from "@/components/BoilerplateCard"

interface BoilerplateGridProps {
  boilerplates: Boilerplate[]
}

export function BoilerplateGrid({ boilerplates }: BoilerplateGridProps) {
    console.log('boilerplates: ', boilerplates);
  return (
    <div className="container px-4 md:px-6 py-12">
      {boilerplates.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-800">No boilerplates found</h3>
          <p className="text-blue-600 mt-2">Try selecting a different category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {boilerplates.map((boilerplate, index) => (
            <div
              key={index}
              className="animate-fadeIn"
            >
              <BoilerplateCard boilerplate={boilerplate} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

