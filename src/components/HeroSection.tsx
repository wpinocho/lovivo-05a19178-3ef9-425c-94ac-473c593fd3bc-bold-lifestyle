import { Button } from '@/components/ui/button'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE UI COMPONENT - HeroSection
 * 
 * Bold minimalist hero with giant typography
 */

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        {/* Giant Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
          REDEFINE
          <br />
          YOUR{' '}
          <span className="inline-block relative">
            SPACE
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent" />
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
          Premium lifestyle products for the modern minimalist. 
          Curated with intention, designed with purpose.
        </p>
        
        {/* CTA */}
        <ScrollLink to="/#products">
          <Button
            size="lg"
            className="rounded-full px-12 py-6 text-base font-bold tracking-wide hover:scale-105 transition-transform duration-300"
          >
            EXPLORE COLLECTION
          </Button>
        </ScrollLink>
      </div>
      
      {/* Hero Product Image - Floating */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 hidden lg:block">
        <div className="relative">
          <img
            src="/hero-product.jpg"
            alt="Featured Product"
            className="w-full h-auto object-contain drop-shadow-2xl animate-float"
          />
        </div>
      </div>
      
      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}