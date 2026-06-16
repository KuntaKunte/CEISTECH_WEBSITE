import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import { stats } from '../data/siteContent';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_35%)]" />
        <div className="absolute right-0 top-24 h-[32rem] w-[32rem] rounded-full bg-cyan/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8 lg:pb-32">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan">
                Intelligent industrial technology
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Transforming Industries Through Intelligent Technology
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Industrial IoT, Computer Vision, AI and Digital Transformation Solutions for Modern Businesses.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/solutions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative isolate rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-slate-950/40">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-electric via-cyan to-white opacity-70" />
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-5">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-inner shadow-white/5">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan">Smart Industry</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Connected Operations</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      A premium industrial technology platform for telemetry, quality inspection and asset intelligence.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-300">
                      <p className="font-semibold text-white">Digital Transformation</p>
                      <p className="mt-3 leading-7">Automate manual workflows, improve visibility and deliver real-time insights across operations.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-300">
                      <p className="font-semibold text-white">Computer Vision</p>
                      <p className="mt-3 leading-7">Detect defects, optimize quality and enable intelligent decision making in manufacturing and mining.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-cyan/20 bg-slate-950/80 p-6">
                  <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-cyan">
                    <Sparkles className="h-4 w-4" />
                    Innovation for South African industry
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    CEIS delivers secure, scalable solutions for manufacturing, mining, agriculture, logistics and smart building systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Trusted results"
            title="Performance metrics that highlight modern industrial engineering"
            description="CEIS solutions deliver uptime, visibility and automation across critical environments."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
