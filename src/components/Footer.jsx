import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function Footer() {
  const year = new Date().getFullYear();
  const waMsg = encodeURIComponent("Hi E. Senthil Kumar sir, I'd like to enquire about a project.");

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoImg} alt="SK Construction Logo" style={{ height: '72px', width: 'auto', objectFit: 'contain' }} />
          </div>

          <div className="footer-links">
            <a href="#projects">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-ctas">
            <a href="tel:9551258813" className="btn btn-dark btn-sm" aria-label="Call SK Construction at 9551258813">
              <Phone size={14} />
              9551258813
            </a>
            <a
              href={`https://wa.me/919551258813?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: 40, height: 40, background: '#25D366' }}
              aria-label="Chat on WhatsApp with SK Construction"
            >
              <MessageSquare size={17} />
            </a>
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: 20 }} />

        {/* Bottom row */}
        <div className="footer-bottom">
          <div className="footer-address">
            <MapPin size={13} />
            <span>SK Construction Chennai: 14-B SK Villa, 9th Street, AGS Colony, Pallikaranai, Chennai – 600 100. Premier builders for duplex house and villa construction in and around Pallikaranai.</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {year} SK Construction Chennai (E. Senthil Kumar). All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-section);
          border-top: 1px solid var(--border);
          padding: 40px 0 32px;
        }
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo-mark {
          width: 36px; height: 36px;
          background: var(--text-primary);
          color: #fff;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .footer-brand-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .footer-brand-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .footer-links {
          display: flex;
          gap: 28px;
        }
        .footer-links a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }
        .footer-links a:hover { color: var(--text-primary); }
        .footer-ctas {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-sm {
          padding: 9px 18px;
          font-size: 0.82rem;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-address {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        @media (max-width: 700px) {
          .footer-top { flex-direction: column; align-items: flex-start; }
          .footer-links { flex-wrap: wrap; gap: 16px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
