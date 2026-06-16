import { motion } from 'framer-motion';

export default function IndustryCard({ name, challenges, solutions, benefits }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/40"
    >
      <h3 className="text-2xl font-semibold text-navy">{name}</h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
        <p>
          <strong className="text-slate-900">Challenges:</strong> {challenges}
        </p>
        <p>
          <strong className="text-slate-900">Solutions:</strong> {solutions}
        </p>
        <p>
          <strong className="text-slate-900">Benefits:</strong> {benefits}
        </p>
      </div>
    </motion.div>
  );
}
