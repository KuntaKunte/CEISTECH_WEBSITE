import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, technologies }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-[2rem] border border-slate-200/80 bg-slate-50 p-6 shadow-lg shadow-slate-200/40"
    >
      <div className="h-60 rounded-[1.75rem] bg-slate-200" />
      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-semibold text-navy">{title}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
