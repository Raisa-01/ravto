import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <Card className="p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Ravto, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Contact information (name, email address, phone number)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Project requirements and specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Communication preferences and history</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Provide and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Communicate with you about your projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Send relevant updates and marketing communications (with your consent)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@ravto.com" className="text-primary hover:underline">
                  privacy@ravto.com
                </a>
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
