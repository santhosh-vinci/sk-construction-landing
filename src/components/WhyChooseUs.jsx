import React from 'react';
import { ShieldCheck, Award, Users, HardHat, Clock, CheckCircle2, ThumbsUp, Scale } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: HardHat,
      title: "Direct Supervision by E. Senthil Kumar",
      desc: "Every foundation, beam, and finishing detail is directly inspected by our founder and principal builder with 25+ years Chennai experience."
    },
    {
      icon: Award,
      title: "20+ Landmark Projects Delivered",
      desc: "A proven track record of successful independent villas, multi-family apartments, and interior design across Pallikaranai, Velachery, OMR, and Tambaram."
    },
    {
      icon: ShieldCheck,
      title: "100% Branded Materials Matrix",
      desc: "We strictly use TATA Tiscon / JSW TMT steel, Ultratech / Coromandel cement, Kajaria tiles, Kohler/Jaquar bathware, and Finolex electrical wiring."
    },
    {
      icon: Clock,
      title: "On-Time Milestone Guarantee",
      desc: "Structured stage-wise milestone schedules with real-time updates for clients. No hidden cost escalation or delay excuses."
    },
    {
      icon: Scale,
      title: "100% Vaastu & CMDA Approval Ready",
      desc: "Our architectural planning team ensures layout compliance with ancient Vaastu principles and Greater Chennai Corporation plan approvals."
    },
    {
      icon: ThumbsUp,
      title: "Comprehensive Warranty Support",
      desc: "Long-term structural guarantees on RCC framing, foundation integrity, and terrace waterproofing for total peace of mind."
    }
  ];

  return (
    <section id="about" className="why-us-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">WHY SK CONSTRUCTION</div>
          <h2 className="section-title">
            Built on Trust, Precision & <span className="gold-text">Engineering Integrity</span>
          </h2>
          <p className="section-subtitle">
            Choosing SK Construction & Interiors means partnering with Chennai's most dependable local builder who values structural durability over short-cuts.
          </p>
        </div>

        <div className="grid-3 why-grid">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="why-card glass-card">
                <div className="why-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Chennai Brand Guarantee Banner */}
        <div className="brand-guarantee-banner">
          <div className="guarantee-left">
            <ShieldCheck size={40} className="gold-text" />
            <div>
              <h3 className="guarantee-title">Zero Quality Compromise Policy</h3>
              <p className="guarantee-desc">
                We invite prospective home-owners to visit any of our active or completed 20+ project sites in Chennai (Pallikaranai, Velachery, OMR) to inspect material grade & structural finishes in person.
              </p>
            </div>
          </div>
          <a href="tel:9962125678" className="btn btn-primary">
            <span>Schedule Site Visit (9962125678)</span>
          </a>
        </div>
      </div>

      <style>{`
        .why-us-section {
          padding: 90px 0;
          background: #0b0f19;
        }

        .why-grid {
          gap: 24px;
          margin-bottom: 50px;
        }

        .why-card {
          border: 1px solid var(--border-light);
          transition: var(--transition-smooth);
        }

        .why-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-3px);
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-primary);
          margin-bottom: 18px;
        }

        .why-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .why-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .brand-guarantee-banner {
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid var(--border-gold-strong);
          border-radius: var(--radius-lg);
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .guarantee-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .guarantee-title {
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .guarantee-desc {
          font-size: 0.9rem;
          color: var(--text-sub);
          max-width: 720px;
        }

        @media (max-width: 900px) {
          .brand-guarantee-banner {
            flex-direction: column;
            text-align: center;
          }
          .guarantee-left {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
