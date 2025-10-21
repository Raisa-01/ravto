import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroBackground from '@assets/generated_images/Hero_background_elements_118f9c28.png';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-chart-1/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-chart-2/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-chart-3/20 rounded-full blur-3xl animate-float" />
      </div>

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Badge removed per request */}

        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight animate-fade-in-up">
          We design and build digital products that <span className="gradient-text">perform</span>
        </h1>
  {/* Subtitle removed per user request */}

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ravto partners with teams to create user-centered websites and apps — thoughtful design, reliable engineering, and measurable outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 group"
            data-testid="button-cta-hero"
          >
            Get a Quote
            <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-lg px-8"
            data-testid="button-view-services"
          >
            Our Services
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
