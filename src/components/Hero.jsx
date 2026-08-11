import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import heroHome from '../assets/hero-home.webp';
import heroHomeArt from '../assets/hero-home-art.webp';

/*
  ═══════════════════════════════════════════════════════════════════
  HERO LAYOUT — exact Buildify reference breakdown:

  ┌─────────────────────────────────────────────────────────────────┐
  │  [NAV — fixed, transparent, sits on top of teal band]           │
  │                                                                 │
  │   TEAL (#C5E8E3) ·····  │   ╔══════════════════════════╗       │
  │                         │   ║   BUILDING PHOTO          ║       │
  │                         │   ║   (modern concrete bldg)  ║       │
  │                         │   ║                           ║       │
  │                         │   ╚════════════════╗ rounded  ║       │
  │ ╔══════════════════════╗ │                   ║  bl-[44] ║       │
  │ ║  WHITE PANEL         ║ │   ┌───────────────╨──────────╜       │
  │ ║  rounded tr-[44px]   ║ │   │  floating card (semi-white)      │
  │ ║                       ║ │   │  "Building the Future..."        │
  │ ║  QUALITY CONSTRUCTION ║ │   │  [CALL FOR A QUOTE] [↗]         │
  │ ║  SOLUTIONS ✦          ║ │   └──────────────────────────────────│
  │ ╚═══════════════════════╝ │                                     │
  └─────────────────────────────────────────────────────────────────┘
  ── BOTTOM STRIP ── "CHECK OUR COMPLETED PROJECTS..."
  ═══════════════════════════════════════════════════════════════════
*/

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Initialize mask to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Scroll animations
  const { scrollY } = useScroll();
  
  // Desktop layout mapping: centered card expands to full bleed
  const paddingTop = useTransform(scrollY, [0, 400], [128, -32]);
  const paddingSide = useTransform(scrollY, [0, 400], [80, -32]);
  const paddingBottom = useTransform(scrollY, [0, 400], [40, -32]);
  const borderTopRadius = useTransform(scrollY, [0, 400], [44, 0]);
  const borderBottomRadius = useTransform(scrollY, [0, 400], [0, 44]);
  const imageScale = useTransform(scrollY, [0, 400], [1, 1.15]);

  // Mask reveal mappings
  const scrollRadius = useTransform(scrollY, [0, 400], [120, 3000]);
  const isHoveredMotion = useMotionValue(0);
  useEffect(() => {
    isHoveredMotion.set(isHovered ? 1 : 0);
  }, [isHovered]);
  const scrollOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const artOpacity = useTransform(() => Math.max(isHoveredMotion.get(), scrollOpacity.get()));
  const ringOpacity = useTransform(() => Math.max(0, isHoveredMotion.get() - scrollOpacity.get()));
  const clipPath = useMotionTemplate`circle(${scrollRadius}px at ${mouseX}px ${mouseY}px)`;
  const waMsg = encodeURIComponent(
    'Hi E. Senthil Kumar sir, I visited your SK Construction website and would like to discuss a project.'
  );
  const waUrl = `https://wa.me/919962125678?text=${waMsg}`;

  return (
    <>
      {/* ══════════════ HERO SECTION ══════════════ */}
      <section
        id="home"
        className={[
          'relative overflow-hidden bg-[#C5E8E3]',
          'h-[calc(100vh-56px)] min-h-[560px] max-h-[900px]',
        ].join(' ')}
      >

        {/* ── 1. BUILDING PHOTO
               Absolute · starts from very top of section
               Right edge flush with viewport right
               Left edge at 33% (leaves teal visible left)
               Bottom at 72% height → bottom-[28%]
               KEY: border-radius bottom-left only = rounded-bl-[44px]
        ── */}
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            top: paddingTop,
            left: paddingSide,
            right: paddingSide,
            bottom: paddingBottom,
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
            borderBottomLeftRadius: borderBottomRadius,
            borderBottomRightRadius: borderBottomRadius
          }}
          className={[
          'group',
          'absolute inset-0',
          'overflow-hidden',
          'z-10 md:shadow-2xl bg-white',
          'cursor-crosshair'
        ].join(' ')}>
          {/* Mobile Base Image */}
          <motion.img
            src={heroHome}
            alt="SK Construction luxury villa Chennai"
            className="md:hidden absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8"
            style={{ scale: imageScale }}
          />

          {/* Mobile Art Image (Fades in on scroll) */}
          <motion.img
            src={heroHomeArt}
            alt="SK Construction Sketch Mobile"
            className="md:hidden absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8"
            style={{ opacity: scrollOpacity, scale: imageScale }}
          />

          {/* Desktop Base Image */}
          <motion.img
            src={heroHome}
            alt="SK Construction luxury villa Chennai"
            className="hidden md:block absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8"
            style={{ scale: imageScale }}
          />

          {/* Desktop Mask Image - Art Version */}
          <motion.img
            src={heroHomeArt}
            alt="SK Construction Sketch"
            className="hidden md:block absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8"
            style={{ 
              opacity: artOpacity,
              clipPath: clipPath,
              scale: imageScale
            }}
          />
          {/* Desktop Minimal round border ring */}
          <motion.div 
             className="hidden md:block absolute pointer-events-none rounded-full border border-white/50 shadow-[0_0_30px_rgba(0,0,0,0.15)] mix-blend-overlay"
             style={{ 
               width: '240px', 
               height: '240px',
               left: mouseX,
               top: mouseY,
               marginLeft: '-120px',
               marginTop: '-120px',
               opacity: ringOpacity
             }}
          />
        </motion.div>


        {/* ── 3. FLOATING INFO + CTA CARD
               Semi-transparent frosted white
               Positioned at bottom-right, overlapping where photo meets teal
               KEY: all-corners rounded = rounded-[20px], backdrop-blur
        ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className={[
          'absolute z-30',
          'right-[4%] bottom-[8%]',
          'w-[264px]',
          'bg-white/85 backdrop-blur-xl',
          'rounded-[20px]',
          'p-[22px]',
          'shadow-[0_8px_32px_rgba(0,0,0,0.10)]',
        ].join(' ')}>

          {/* Card heading */}
          <h3 className="font-jakarta font-bold text-[15px] leading-snug text-gray-900 mb-2">
            Building the Future,<br />One Project at a Time
          </h3>

          {/* Card body copy */}
          <p className="font-inter text-[12.5px] leading-relaxed text-gray-500 mb-4">
            At SK Construction, we specialise in turning your construction ideas into reality — villas, apartments, and interiors across Chennai.
          </p>

          {/* ── CTA ROW: yellow pill + dark circle ── */}
          <div className="flex items-center gap-2">

            {/* Yellow pill "BOOK A MEETING" style — calls builder */}
            <a
              href="tel:9962125678"
              className={[
                'flex items-center px-4 py-2.5 rounded-full',
                'bg-[#E8B94E] text-white',
                'font-inter font-bold text-[11px] tracking-[0.06em] uppercase',
                'transition-all duration-200 hover:brightness-105 hover:-translate-y-px',
                'flex-shrink-0',
              ].join(' ')}
            >
              CALL FOR A QUOTE
            </a>

            {/* Dark circle arrow — WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={[
                'w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0',
                'bg-gray-900 text-white',
                'transition-all duration-200 hover:bg-gray-700',
              ].join(' ')}
            >
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </a>
          </div>
        </motion.div>

      </section>

      {/* ══════════════ BOTTOM STRIP ══════════════ */}
      <div className="relative z-20 bg-white rounded-t-[32px] md:rounded-t-[44px] -mt-[32px] md:-mt-[44px] pt-[32px] md:pt-[44px] pb-4 flex items-center shadow-[0_-8px_32px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1280px] mx-auto px-8 w-full flex items-center justify-between">
          <span className="font-inter font-semibold text-[11px] tracking-[0.12em] uppercase text-gray-400">
            CHECK OUR COMPLETED PROJECTS IN &amp; AROUND CHENNAI
          </span>
          <a
            href="#projects"
            className={[
              'font-inter font-semibold text-[12px] text-gray-800',
              'px-4 py-1.5 rounded-full border border-black/15',
              'hover:bg-gray-900 hover:text-white hover:border-gray-900',
              'transition-all duration-200',
            ].join(' ')}
          >
            View Portfolio ↓
          </a>
        </div>
      </div>

      {/* ══════════════ RESPONSIVE STYLES ══════════════
          Tailwind's responsive prefixes handle layout shifts:
          On <960px we stack the photo, text-panel, and card vertically.
      ══════════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 959px) {
          #home {
            height: auto !important;
            max-height: none !important;
            padding-bottom: 0;
            overflow: visible !important;
            display: flex !important;
            flex-direction: column !important;
            padding-top: 110px !important;
          }
          /* Photo: below text */
          #home > div:nth-child(1) {
            order: 2 !important;
            position: relative !important;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
            margin-top: 0 !important;
            width: 100% !important;
            height: 75vw !important;
            min-height: 320px;
            max-height: 500px;
            border-top-left-radius: 32px !important;
            border-top-right-radius: 32px !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            z-index: 10 !important;
          }
          /* Floating card -> Native Hero Text */
          #home > div:nth-child(2) {
            order: 1 !important;
            position: relative !important;
            bottom: auto !important; right: auto !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 32px 48px !important;
            box-shadow: none !important;
            background: transparent !important;
            border: none !important;
            backdrop-filter: none !important;
            z-index: 30 !important;
          }
          #home > div:nth-child(2) h3 {
            font-size: 2.2rem !important;
            line-height: 1.15 !important;
            margin-bottom: 16px !important;
            letter-spacing: -0.02em !important;
          }
          #home > div:nth-child(2) p {
            font-size: 1rem !important;
            margin-bottom: 28px !important;
            color: rgba(17, 24, 39, 0.8) !important;
          }
        }
      `}</style>
    </>
  );
}
