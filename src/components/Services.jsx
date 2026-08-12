import React from 'react';
import { servicesData } from '../data/servicesData';
import { Home, Palette, RefreshCw, Building, Compass, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

const iconMap = {
  Home: Home,
  Palette: Palette,
  RefreshCw: RefreshCw,
  Building: Building,
  Compass: Compass
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">OUR CORE EXPERTISE</div>
          <h2 className="section-title">
            Comprehensive Construction & <span className="gold-text">Interior Solutions</span>
          </h2>
          <p className="section-subtitle">
            From initial architectural plan approval to final key handover, SK Construction & Interiors provides uncompromised engineering quality across Chennai.
          </p>
        </div>

        <div className="grid-3 services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Home;
            const waMsg = encodeURIComponent(`Hi E. Senthil Kumar sir, I am inquiring about your service: ${service.title}.`);
            const waUrl = `https://wa.me/919551258813?text=${waMsg}`;

            return (
              <div key={service.id} className="service-card glass-card">
                <div className="service-icon-box">
                  <IconComponent size={28} className="service-icon" />
                </div>

                <div className="service-pricing-badge">{service.priceRange}</div>

                <h3 className="service-title">{service.title}</h3>
                <div className="service-subtitle">{service.subtitle}</div>
                <p className="service-desc">{service.description}</p>

                <ul className="service-points-list">
                  {service.points.map((pt, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="pt-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-action">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm btn-block">
                    <MessageSquare size={16} />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 90px 0;
          background: linear-gradient(180deg, #0d1322 0%, #0b0f19 100%);
        }

        .services-grid {
          gap: 28px;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          position: relative;
          border: 1px solid var(--border-light);
        }

        .service-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }

        .service-icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-primary);
          margin-bottom: 20px;
        }

        .service-pricing-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--gold-primary);
          background: rgba(212, 175, 55, 0.1);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-gold);
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .service-subtitle {
          font-size: 0.85rem;
          color: var(--gold-primary);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .service-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .service-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
        }

        .service-points-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-sub);
        }

        .pt-icon {
          color: var(--gold-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-action {
          margin-top: auto;
        }
      `}</style>
    </section>
  );
}
