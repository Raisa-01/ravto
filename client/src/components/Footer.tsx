import { SiGithub, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import ravtoLogo from '@assets/generated_images/Ravto_logo_design_ddcec535.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ravtoLogo} alt="Ravto" className="h-10 w-10" />
              <span className="font-heading font-bold text-2xl gradient-text">RAVTO</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A youth-focused software agency building the future of digital experiences with creativity and innovation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-card-border hover-elevate flex items-center justify-center transition-all"
                aria-label="X (Twitter)"
                data-testid="link-twitter"
              >
                <SiX className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-card-border hover-elevate flex items-center justify-center transition-all"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-card-border hover-elevate flex items-center justify-center transition-all"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-card-border hover-elevate flex items-center justify-center transition-all"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <SiGithub className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-website">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-app">
                  App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-ui">
                  UI Mockups
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-branding">
                  Branding
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ravto. All rights reserved. Built with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
}
