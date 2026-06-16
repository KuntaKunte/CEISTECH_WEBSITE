import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteContent';

export default function Projects() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects showcasing industrial innovation"
          description="Explore examples of smart monitoring, vision inspection, remote equipment telemetry and digital field systems."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
