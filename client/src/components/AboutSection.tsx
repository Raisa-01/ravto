import { Card } from '@/components/ui/card';
import { Zap, Users, Award, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'We deliver projects quickly without compromising on quality or attention to detail.',
    },
    {
      icon: Users,
      title: 'Youth-Driven',
      description: 'Our young, energetic team brings fresh perspectives and innovative solutions.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every project is crafted with precision, creativity, and a commitment to excellence.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Ravto</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            Why Choose <span className="gradient-text">Ravto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another software agency. We're a team of passionate young creators dedicated to transforming ideas into digital realities. With cutting-edge technology and boundless creativity, we help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 text-center hover-elevate transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-accent/20 border-primary/20">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join the growing list of satisfied clients who've transformed their digital presence with Ravto
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="font-heading font-bold text-3xl gradient-text mb-1">98%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl gradient-text mb-1">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl gradient-text mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
