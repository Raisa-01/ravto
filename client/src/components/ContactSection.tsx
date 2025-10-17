import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Send us a message and let's create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" className="w-full group" data-testid="button-submit">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch via email for detailed inquiries
              </p>
              <a
                href="mailto:hello@ravto.com"
                className="text-primary font-medium hover:underline"
                data-testid="link-email"
              >
                hello@ravto.com
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-chart-2 text-white">
              <h3 className="font-heading font-semibold text-xl mb-3">Quick Response</h3>
              <p className="mb-4 text-white/90">
                We typically respond within 24 hours on business days. For urgent inquiries, please mention it in your message.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-glow-pulse" />
                <span className="text-sm text-white/90">Usually replies in under 2 hours</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
