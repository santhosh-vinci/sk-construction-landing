import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { MapPin, ArrowUpRight, Phone } from 'lucide-react';

export default function ProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'villas', label: 'Villas' },
    { id: 'residential', label: 'Apartments' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovations', label: 'Renovations' },
  ];

  const filtered = projectsData.filter(p =>
    activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        {/* Header row */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <span className="section-label">OUR WORK</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              20+ Completed Projects<br />
              <em style={{ fontStyle: 'normal', color: 'var(--text-muted)', fontWeight: 400 }}>
                Across Chennai & Suburbs
              </em>
            </h2>
          </div>
          <div className="portfolio-header-right">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 320, lineHeight: 1.6 }}>
              SK Construction Chennai – Duplex house construction, luxury villas, and commercial projects in and around Pallikaranai, Velachery, OMR, and Chennai under E. Senthil Kumar's supervision.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="filter-row">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-btn ${activeCategory === c.id ? 'active' : ''}`}
              aria-label={`Filter projects by ${c.label}`}
              aria-pressed={activeCategory === c.id}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for project ${project.title} in ${project.location}`}
              className={`proj-card ${idx === 0 && activeCategory === 'all' ? 'proj-card--featured' : ''}`}
              onClick={() => setActiveProject(project)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveProject(project); } }}
            >
              <div className="proj-img-wrap">
                <img src={project.mainImage} alt={project.title} loading="lazy" />
                <div className="proj-overlay">
                  <span className="btn-icon"><ArrowUpRight size={20} /></span>
                </div>
              </div>
              <div className="proj-info">
                <div className="proj-meta">
                  <span className="pill" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>
                    {project.category.toUpperCase()}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <MapPin size={12} />
                    {project.location.split(',')[0]}
                  </span>
                </div>
                <h3 className="proj-title">{project.title}</h3>
                <div className="proj-footer">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.area} · {project.year}</span>
                  <a
                    href="tel:9551258813"
                    className="proj-enquire"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Enquire about ${project.title} with SK Construction`}
                    title="Call for enquiry"
                  >
                    <Phone size={13} />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <style>{`
        .portfolio-section {
          padding: 100px 0;
          background: var(--bg);
        }
        .portfolio-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 40px;
        }
        .filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .filter-btn {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--border-dark);
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--text-primary);
          color: #fff;
          border-color: var(--text-primary);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .proj-card--featured {
          grid-column: span 2;
        }
        .proj-card {
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .proj-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .proj-img-wrap {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .proj-card--featured .proj-img-wrap {
          aspect-ratio: 16/9;
        }
        .proj-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-img-wrap img {
          transform: scale(1.04);
        }
        .proj-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 16px;
          transition: var(--transition);
        }
        .proj-card:hover .proj-overlay {
          opacity: 1;
        }
        .proj-info {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .proj-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .proj-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .proj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }
        .proj-enquire {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          transition: var(--transition);
        }
        .proj-enquire:hover {
          color: var(--text-primary);
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .proj-card--featured { grid-column: span 2; }
          .portfolio-header { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 768px) {
          .portfolio-section { padding: 60px 0; }
          .portfolio-header { margin-bottom: 24px; }
          .filter-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 8px;
            margin-bottom: 24px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .filter-row::-webkit-scrollbar { display: none; }
          .filter-btn { white-space: nowrap; flex-shrink: 0; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
          .proj-card--featured { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
