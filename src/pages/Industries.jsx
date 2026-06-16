import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import { industries } from '../data/siteContent';

export default function Industries() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Sector-specific technology solutions for modern operations"
          description="We serve manufacturing, mining, agriculture, logistics, warehousing and smart buildings with tailored digital transformation strategies."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </div>
      </section>
    </div>
  );
}
