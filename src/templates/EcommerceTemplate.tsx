import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { Input } from '@/components/ui/input'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()

  const header = (
    <div className={`py-4 backdrop-blur-md bg-background/80 border-b border-border/50 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {!loadingCollections && hasCollections && (
                <ScrollLink 
                  to="/#collections" 
                  className="text-foreground/60 hover:text-foreground transition-colors font-medium text-sm tracking-wide"
                >
                  SHOP
                </ScrollLink>
              )}
              <ScrollLink 
                to="/#products" 
                className="text-foreground/60 hover:text-foreground transition-colors font-medium text-sm tracking-wide"
              >
                PRODUCTS
              </ScrollLink>
              <Link 
                to="/blog" 
                className="text-foreground/60 hover:text-foreground transition-colors font-medium text-sm tracking-wide"
              >
                JOURNAL
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-accent/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-foreground text-xs font-black rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-4xl font-black tracking-tight text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`relative bg-foreground text-background py-20 overflow-hidden ${footerClassName}`}>
      {/* Giant Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20rem] font-black tracking-tighter">AURA</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-black tracking-tighter">AURA</span>
            </div>
            <p className="text-background/70 font-light max-w-sm">
              Premium lifestyle products for the modern minimalist. Designed with intention, crafted with purpose.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-background text-sm tracking-wide">QUICK LINKS</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-background/70 hover:text-background transition-colors font-light"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-background/70 hover:text-background transition-colors font-light"
              >
                Journal
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-background text-sm tracking-wide">CONNECT</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm font-light">
          <p>&copy; 2025 AURA. All rights reserved.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}