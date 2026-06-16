import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Start your digital transformation journey"
          description="Reach out to CEIS for Industrial IoT, Computer Vision, AI and digitization solutions built for enterprise operations."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-lg shadow-slate-200/30"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Company</span>
                <input
                  type="text"
                  name="company"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
                  placeholder="Company name"
                />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
                  placeholder="hello@ceistech.co.za"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
                  placeholder="+27 12 345 6789"
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="text-sm font-semibold text-slate-700">Service Required</span>
              <select
                name="service"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
              >
                <option>Industrial IoT Solutions</option>
                <option>Computer Vision & AI Inspection</option>
                <option>Digital Transformation</option>
                <option>Smart Monitoring Systems</option>
                <option>Custom Software Development</option>
                <option>Data Analytics</option>
              </select>
            </label>

            <label className="mt-6 block">
              <span className="text-sm font-semibold text-slate-700">Message</span>
              <textarea
                name="message"
                rows="6"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
                placeholder="Tell us about your project goals or challenges."
              />
            </label>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white transition hover:bg-electric/90"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-lg shadow-slate-200/30"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan">Company Information</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy">CEIS</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                CEIS delivers Industrial IoT, Computer Vision, AI, Digitization and Smart Monitoring Solutions for industrial enterprises in South Africa.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Website</p>
                <p>ceistech.co.za</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Services</p>
                <p>Industrial IoT, Computer Vision, AI, Digitization</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Office</p>
                <p>South Africa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
