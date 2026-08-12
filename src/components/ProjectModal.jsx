import React, { useState } from 'react';
import { X, MapPin, Calendar, Layers, Clock, HardHat, CheckCircle2, Phone, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  if (!project) return null;

  const images = project.gallery?.length ? project.gallery : [project.mainImage];

  const waMsg = encodeURIComponent(
    `Hi E. Senthil Kumar sir, I saw the "${project.title}" project in ${project.location} on your website. I'd like to enquire about a similar project.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-body">
          {/* Gallery */}
          <div className="modal-gallery">
            <div className="modal-main-img">
              <img src={images[imgIdx]} alt={project.title} />
              {images.length > 1 && (
                <>
                  <button className="img-nav prev" onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="img-nav next" onClick={() => setImgIdx((imgIdx + 1) % images.length)}>
                    <ChevronRight size={20} />
                  </button>
                  <span className="img-counter">{imgIdx + 1} / {images.length}</span>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="modal-thumbs">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`thumb ${i === imgIdx ? 'thumb--active' : ''}`}
                    onClick={() => setImgIdx(i)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="modal-details">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
              <span className="pill pill-accent">{project.category.toUpperCase()}</span>
              <span className="pill"><MapPin size={11} /> {project.location}</span>
            </div>

            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: 10 }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
              {project.fullDesc || project.shortDesc}
            </p>

            {/* Specs */}
            <div className="modal-specs">
              <div className="spec"><Layers size={15} /><span><strong>{project.area}</strong><br /><small>Built-up Area</small></span></div>
              <div className="spec"><Calendar size={15} /><span><strong>{project.year}</strong><br /><small>Completed</small></span></div>
              <div className="spec"><Clock size={15} /><span><strong>{project.completionTime || '—'}</strong><br /><small>Duration</small></span></div>
              <div className="spec"><HardHat size={15} /><span><strong>E. Senthil Kumar</strong><br /><small>Builder</small></span></div>
            </div>

            {/* Features */}
            {project.features?.length > 0 && (
              <div className="modal-features">
                <p className="section-label" style={{ marginBottom: 12 }}>Highlights</p>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="feat-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="modal-cta">
              <a href="tel:9551258813" className="btn btn-dark" style={{ flex: 1 }}>
                <Phone size={16} />
                Call for Similar Project Quote
              </a>
              <a
                href={`https://wa.me/919551258813?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-panel {
          background: #fff;
          border-radius: 20px;
          max-width: 960px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
          animation: slideUp 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes slideUp { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          z-index: 10;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .modal-close:hover { background: var(--text-primary); color: #fff; }
        .modal-body {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 500px;
        }
        .modal-gallery {
          background: var(--surface);
          border-radius: 20px 0 0 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .modal-main-img {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          min-height: 280px;
        }
        .modal-main-img img {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .img-nav {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.85);
          border: none; border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .img-nav:hover { background: #fff; }
        .img-nav.prev { left: 10px; }
        .img-nav.next { right: 10px; }
        .img-counter {
          position: absolute;
          bottom: 10px; right: 12px;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .modal-thumbs {
          display: flex;
          gap: 8px;
        }
        .thumb {
          width: 60px; height: 44px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid transparent;
          background: none;
          cursor: pointer;
          opacity: 0.6;
          transition: var(--transition);
          flex-shrink: 0;
        }
        .thumb--active, .thumb:hover { opacity: 1; border-color: var(--text-primary); }
        .thumb img { width: 100%; height: 100%; object-fit: cover; }
        .modal-details {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
        }
        .modal-specs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          background: var(--surface);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
        }
        .spec {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--accent);
          font-size: 0.85rem;
        }
        .spec strong { font-size: 0.9rem; color: var(--text-primary); display: block; }
        .spec small { font-size: 0.72rem; color: var(--text-muted); }
        .modal-features {
          margin-bottom: 24px;
        }
        .modal-features ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .modal-features li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .feat-icon { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
        .modal-cta {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }
        @media (max-width: 700px) {
          .modal-body { grid-template-columns: 1fr; }
          .modal-gallery { border-radius: 20px 20px 0 0; }
          .modal-details { padding: 24px 20px; }
        }
        @media (max-width: 480px) {
          .modal-specs { grid-template-columns: 1fr; }
          .modal-details { padding: 20px 16px; }
          .modal-gallery { padding: 16px; }
          .modal-backdrop { padding: 12px; }
        }
      `}</style>
    </div>
  );
}
