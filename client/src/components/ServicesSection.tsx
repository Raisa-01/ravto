import { Code, Smartphone, Palette, Share2, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Website Design',
      description: 'Modern, responsive websites that make an impact and drive results for your business.',
      features: [
        'Custom design tailored to your brand',
        'Mobile-first responsive layouts',
        'SEO optimized structure',
        'Lightning-fast performance',
      ],
    },
    {
      icon: Smartphone,
      title: 'Flutter App Development',
      description: 'Cross-platform mobile apps that work seamlessly on iOS and Android devices.',
      features: [
        'Native performance on all platforms',
        'Beautiful, intuitive interfaces',
        'Smooth animations and transitions',
        'App store deployment support',
      ],
    },
    {
      icon: Palette,
      title: 'UI Mockups (Figma)',
      description: 'High-fidelity designs that bring your vision to life before development begins.',
      features: [
        'Interactive prototypes',
        'Complete design systems',
        'Collaborative workflow',
        'Developer-ready specifications',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Graphics',
      description: 'Eye-catching visuals designed to boost engagement across all social platforms.',
      features: [
        'Platform-optimized formats',
        'Consistent brand identity',
        'Canva templates included',
        'Unlimited revisions',
      ],
    },
    {
      icon: Sparkles,
      title: 'Branding Packages',
      description: 'Complete brand identity solutions that make your business stand out from the crowd.',
      features: [
        'Logo design and variations',
        'Color palette and typography',
        'Brand guidelines document',
        'Marketing collateral templates',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What We Do</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From concept to launch, we provide everything you need to build a powerful digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
