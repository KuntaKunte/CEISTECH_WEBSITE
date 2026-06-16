import { motion } from 'framer-motion';

export default function SolutionCard({ name, summary, features }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-200/90 bg-slate-50 p-8 shadow-lg shadow-slate-200/40"
    >
      <h3 className="text-2xl font-semibold text-navy">{name}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
            {feature}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
