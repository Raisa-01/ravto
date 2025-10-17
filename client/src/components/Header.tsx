import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-heading font-bold text-2xl gradient-text">RAVTO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="font-medium"
              data-testid="button-cta-header"
            >
              Let's Build Together
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left px-4 py-2 rounded-md hover-elevate text-foreground font-medium"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-4 py-2 rounded-md hover-elevate text-foreground font-medium"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 rounded-md hover-elevate text-foreground font-medium"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2"
              data-testid="button-cta-mobile"
            >
              Let's Build Together
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
