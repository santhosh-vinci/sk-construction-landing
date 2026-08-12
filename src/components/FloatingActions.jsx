import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const waMsg = encodeURIComponent("Hi E. Senthil Kumar sir, I'd like to enquire about a construction project in Chennai.");
  return (
    <div className="fab-container">
      <a href="tel:9551258813" className="fab fab-call" title="Call E. Senthil Kumar" aria-label="Call E. Senthil Kumar at 9551258813">
        <Phone size={20} />
      </a>
      <a
        href={`https://wa.me/919551258813?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-wa"
        title="WhatsApp"
        aria-label="Chat on WhatsApp with SK Construction Chennai"
      >
        <MessageSquare size={22} />
      </a>
      <style>{`
        .fab-container {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 800;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fab {
          width: 50px; height: 50px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: all 0.25s ease;
        }
        .fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(0,0,0,0.22); }
        .fab-call { background: #111; }
        .fab-wa { background: #25D366; }
        @media (max-width: 600px) {
          .fab-container { bottom: 20px; right: 18px; }
          .fab { width: 46px; height: 46px; }
        }
      `}</style>
    </div>
  );
}
