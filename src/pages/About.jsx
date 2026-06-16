import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const values = ['Innovation', 'Reliability', 'Excellence', 'Integrity', 'Customer Success'];

export default function About() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading
            eyebrow="About CEIS"
            title="A technology partner for industrial transformation"
            description="CEIS empowers businesses through intelligent systems, automation and actionable insights."
          />
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-10 shadow-lg shadow-slate-200/30">
            <div>
              <h3 className="text-xl font-semibold text-navy">Mission</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To empower businesses through intelligent technology solutions that improve efficiency, visibility and decision making.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy">Vision</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To become a leading African technology company delivering innovative IoT and AI solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold text-navy">{value}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">CEIS advances every project with {value.toLowerCase()} and enterprise-grade delivery.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
