import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, HardHat, Scale, ThumbsUp, Phone, ArrowUpRight } from 'lucide-react';
import builderImg from '../assets/senthilkumar.webp';

const points = [
  {
    icon: HardHat,
    title: 'Direct Builder Supervision',
    desc: 'Every project, from foundation to finishing, is personally supervised by founder E. Senthil Kumar.',
  },
  {
    icon: Award,
    title: '20+ Projects in Chennai',
    desc: 'Specializing in duplex house construction, luxury villas, and interiors in and around Pallikaranai, Velachery, OMR, Medavakkam, and Chennai.',
  },
  {
    icon: ShieldCheck,
    title: 'Branded Material Matrix',
    desc: 'Only TATA Tiscon / JSW steel, Ultratech cement, Kajaria tiles, and Kohler bath fittings.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Milestone-based schedules with no hidden cost escalations. Timely handovers guaranteed.',
  },
  {
    icon: Scale,
    title: 'Vaastu & Approval Ready',
    desc: 'All layouts are 100% Vaastu compliant and GCC plan-approved before construction begins.',
  },
  {
    icon: ThumbsUp,
    title: 'Structural Warranty',
    desc: 'Long-term guarantee on RCC framing, foundation integrity and terrace waterproofing.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <span className="section-label">WHY SK CONSTRUCTION CHENNAI</span>
          <h2 className="section-title" style={{ marginTop: 10 }}>
            Built on Trust, Precision<br />& Engineering Integrity
          </h2>
        </div>

        {/* Two-col layout */}
        <div className="about-grid">
          {/* Left: Image card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="about-img-col"
          >
            <div className="about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="SK Construction Chennai duplex house and luxury villa construction in Pallikaranai"
              />
            </div>
            <div className="about-img-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img 
                  src={builderImg} 
                  alt="E. Senthil Kumar - SK Construction Chennai" 
                  style={{ width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid #E8B94E' }}
                />
                <div>
                  <p className="about-img-card-title">E. Senthil Kumar</p>
                  <p className="about-img-card-sub" style={{ margin: '2px 0 0 0' }}>Founder & Principal Builder</p>
                </div>
              </div>
              <p className="about-img-card-body">
                25+ years experience in Chennai construction. SK Construction Chennai is the leading builder for duplex house construction and turnkey projects in and around Pallikaranai.
              </p>
              <a href="tel:9551258813" className="btn btn-dark" style={{ marginTop: 16 }} aria-label="Call E. Senthil Kumar for a free consultation at 9551258813">
                <Phone size={15} />
                Call for a Free Consultation
              </a>
            </div>
          </motion.div>

          {/* Right: Points grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="about-points-col"
          >
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="about-point">
                  <div className="about-point-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="about-point-title">{pt.title}</h4>
                    <p className="about-point-desc">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background: var(--bg-section);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .about-header {
          margin-bottom: 56px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-img-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .about-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .about-img-card {
          background: var(--surface);
          border-radius: 14px;
          padding: 22px;
          border: 1px solid var(--border);
        }
        .about-img-card-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .about-img-card-sub {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 600;
          margin: 3px 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .about-img-card-body {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .about-points-col {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .about-point {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          transition: var(--transition);
        }
        .about-point:first-child { padding-top: 0; }
        .about-point:last-child { border-bottom: none; }
        .about-point-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .about-point-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .about-point-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        @media (max-width: 860px) {
          .about-section { padding: 60px 0; }
          .about-header { margin-bottom: 32px; }
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
