import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {logic.success ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="bg-accent/20 rounded-full p-4">
                    <Mail className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-4xl font-black tracking-tighter">
                  WELCOME TO THE CLUB
                </h3>
                <p className="text-background/70 font-light text-lg">
                  You're now on the list for exclusive drops and early access.
                </p>
              </div>
            ) : (
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                    STAY IN
                    <br />
                    THE LOOP
                  </h3>
                  <p className="text-lg text-background/70 font-light max-w-xl mx-auto">
                    Get early access to new products, exclusive offers, and design inspiration.
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-accent rounded-full px-6 h-12"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto rounded-full px-8 h-12 bg-accent text-foreground hover:bg-accent/90 font-bold"
                  >
                    {logic.isSubmitting ? 'JOINING...' : 'JOIN'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};