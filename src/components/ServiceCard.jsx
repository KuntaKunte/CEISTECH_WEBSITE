import { motion } from 'framer-motion';

export default function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className="group rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-lg shadow-slate-200/50"
    >
      <h3 className="text-xl font-semibold text-navy group-hover:text-electric">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}
