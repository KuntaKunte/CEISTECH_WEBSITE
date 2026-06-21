import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../data/siteContent';

const activeStyles = 'text-white bg-electric rounded-full px-4 py-2';
const inactiveStyles = 'text-slate-200 hover:text-white';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-4 text-white">
          <img
            src="/Logo_Company.JPG"
            alt="CEIS logo"
            className="h-14 w-auto max-w-[10rem] rounded-lg object-contain"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em]">Engineering</p>
            <p className="text-base font-semibold">Innovations</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? activeStyles : inactiveStyles
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-100 transition hover:bg-slate-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-300/10 bg-navy/95 md:hidden"
          >
            <div className="space-y-2 px-6 py-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? activeStyles : inactiveStyles
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
