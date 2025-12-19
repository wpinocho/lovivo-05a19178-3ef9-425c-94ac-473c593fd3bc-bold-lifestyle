import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group bg-card border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-3 left-3 bg-accent text-foreground text-xs px-3 py-1 rounded-full font-bold">
              FEATURED
            </span>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-foreground font-black text-xl tracking-tight mb-2">
            {collection.name.toUpperCase()}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm font-light line-clamp-2 mb-4">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full rounded-full font-medium"
            onClick={() => onViewProducts(collection.id)}
          >
            Explore Collection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}