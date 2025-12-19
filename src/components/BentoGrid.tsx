import { type Collection } from '@/lib/supabase'

/**
 * EDITABLE UI COMPONENT - BentoGrid
 * 
 * Bento-style grid layout for collections
 */

interface BentoGridProps {
  collections: Collection[]
  onViewProducts: (collectionId: string) => void
}

export const BentoGrid = ({ collections, onViewProducts }: BentoGridProps) => {
  if (collections.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      {collections.map((collection, index) => {
        // Bento layout: First item spans 2 columns
        const isLarge = index === 0
        const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1'
        const rowSpan = isLarge ? 'md:row-span-2' : 'md:row-span-1'
        
        return (
          <button
            key={collection.id}
            onClick={() => onViewProducts(collection.id)}
            className={`${colSpan} ${rowSpan} group relative overflow-hidden rounded-lg bg-muted h-64 md:h-80 ${isLarge ? 'md:h-full' : ''}`}
          >
            {/* Image Background */}
            {collection.image && (
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 text-left">
              <h3 className="text-white text-2xl font-black tracking-tight mb-2">
                {collection.name.toUpperCase()}
              </h3>
              {collection.description && (
                <p className="text-white/80 text-sm font-light max-w-xs">
                  {collection.description}
                </p>
              )}
              <div className="mt-4 flex items-center text-white/90 text-sm font-medium group-hover:text-accent transition-colors">
                Explore
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}