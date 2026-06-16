import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { serviceCards } from '../data/siteContent';

export default function Services() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Enterprise-grade technology services for industrial operations"
          description="Our service portfolio covers IoT, AI, digital transformation and data platforms designed for manufacturing, logistics and infrastructure clients."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
