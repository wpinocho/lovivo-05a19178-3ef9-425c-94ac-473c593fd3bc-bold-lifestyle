/**
 * EDITABLE UI COMPONENT - Marquee
 * 
 * Infinite scrolling marquee for announcements and urgency
 */

export const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-foreground text-background py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 text-sm font-bold tracking-wider">
              NEW COLLECTION
            </span>
            <span className="mx-8 text-accent">●</span>
            <span className="mx-8 text-sm font-bold tracking-wider">
              LIMITED EDITION
            </span>
            <span className="mx-8 text-accent">●</span>
            <span className="mx-8 text-sm font-bold tracking-wider">
              PRE ORDER NOW
            </span>
            <span className="mx-8 text-accent">●</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}