import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/10 bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">CEIS</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Industrial IoT and AI for smarter operations.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300/90">
              CEIS partners with enterprise and industrial clients across manufacturing, mining, logistics, agriculture and smart buildings.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Links</h3>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              {links.map((link) => (
                <Link key={link.href} to={link.href} className="block transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</h3>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>CEIS</p>
              <p>ceistech.co.za</p>
              <p>Industrial IoT, Computer Vision, AI, Digitization</p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-200">
              <a href="mailto:hello@ceistech.co.za" aria-label="Email CEIS">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn profile">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter profile">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub profile">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-300/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CEIS. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
