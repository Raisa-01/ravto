import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <Card className="p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Ravto's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ravto provides the following professional services:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Website design and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Flutter application development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>UI/UX design and mockups</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Social media graphics and branding</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clients agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Provide timely feedback and required materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Pay agreed-upon fees according to the payment schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Use the delivered work in accordance with the license agreement</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership rights to the final deliverables. Ravto retains the right to showcase completed work in our portfolio unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ravto shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these terms, contact us at{' '}
                <a href="mailto:legal@ravto.com" className="text-primary hover:underline">
                  legal@ravto.com
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
