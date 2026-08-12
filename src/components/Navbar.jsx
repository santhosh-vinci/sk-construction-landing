import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import logoImg from '../assets/logo.webp';
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-white md:bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-[80px] md:h-[96px] flex items-center gap-10">

        {/* ── LOGO ── */}
        <a href="#home"
          className="flex items-center gap-2.5 flex-shrink-0 group select-none"
          aria-label="SK Construction Home"
        >
          <img src={logoImg} alt="SK Construction Logo" className="h-[56px] md:h-[72px] w-auto object-contain transition-transform duration-200 scale-[1.5] md:scale-[1.8] origin-left mt-4 " />
        </a>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden md:flex items-center gap-8 mx-auto" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={[
                'text-[13.5px] font-medium tracking-[0.01em] transition-colors duration-200',
                'text-gray-600 hover:text-gray-900',
                'relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0',
                'after:bg-gray-900 after:transition-[width] after:duration-200 hover:after:w-full',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── RIGHT CTAs ── */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0 ml-auto">
          {/* Pill-outline "CONTACT US" button */}
          <a
            href="#contact"
            className={[
              'px-5 py-[9px] rounded-full',
              'border border-gray-900/80 text-gray-900',
              'text-[12.5px] font-semibold tracking-[0.06em] uppercase',
              'transition-all duration-200',
              'hover:bg-gray-900 hover:text-white hover:border-gray-900',
            ].join(' ')}
          >
            Contact Us
          </a>
          {/* Arrow icon button */}
          <a
            href="#contact"
            aria-label="Contact SK Construction Chennai"
            className={[
              'w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0',
              'border border-gray-900/80 text-gray-900',
              'transition-all duration-200',
              'hover:bg-gray-900 hover:text-white hover:border-gray-900',
            ].join(' ')}
          >
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="md:hidden ml-auto p-1.5 text-gray-900 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.06] shadow-xl px-8 pb-8 pt-2 flex flex-col gap-1 max-h-[calc(100vh-68px)] overflow-y-auto">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-gray-700 border-b border-black/[0.06] hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 py-3 text-center rounded-full bg-gray-900 text-white text-sm font-semibold tracking-wide"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
