import ServiceCard from '../ServiceCard';
import { Code } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard
        icon={Code}
        title="Website Design"
        description="Modern, responsive websites that make an impact"
        features={[
          'Custom design tailored to your brand',
          'Mobile-first responsive layouts',
          'SEO optimized structure',
        ]}
      />
    </div>
  );
}
