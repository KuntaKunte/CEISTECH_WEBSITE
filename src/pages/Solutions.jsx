import SectionHeading from '../components/SectionHeading';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/siteContent';

export default function Solutions() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Integrated platforms that power industrial intelligence"
          description="CEIS solutions are built to support asset connectivity, vision-based inspection, digital workflows and enterprise analytics."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.name} {...solution} />
          ))}
        </div>
      </section>
    </div>
  );
}
