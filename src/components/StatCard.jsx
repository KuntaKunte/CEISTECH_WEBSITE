import { motion } from 'framer-motion';

export default function StatCard({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-lg shadow-slate-200/40"
    >
      <p className="text-4xl font-bold text-navy">{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{label}</p>
    </motion.div>
  );
}
