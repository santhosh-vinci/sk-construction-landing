import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Villa Construction', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = encodeURIComponent(
      `New Enquiry — SK Construction Website\n\nName: ${form.name}\nPhone: ${form.phone}\nProject Type: ${form.type}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919551258813?text=${txt}`, '_blank');
    setSent(true);
  };

  const waUrl = `https://wa.me/919551258813?text=${encodeURIComponent("Hi E. Senthil Kumar sir, I'd like to enquire about a construction project.")}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="contact-info"
          >
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-title" style={{ marginTop: 10, marginBottom: 16 }}>
              Let's Build Something Great Together
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 36 }}>
              Reach out directly to builder <strong>E. Senthil Kumar</strong> for consultations, site visits, and project quotes. Chennai-based, available 7 days a week.
            </p>

            {/* Direct contact rows */}
            <div className="contact-rows">
              <a href="tel:9551258813" className="contact-row">
                <div className="contact-row-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-row-text">
                  <span className="section-label">PRIMARY CALL</span>
                  <strong>+91 99621 25678</strong>
                </div>
                <ArrowUpRight size={18} className="contact-row-arrow" />
              </a>

              <a href="tel:9962125678" className="contact-row">
                <div className="contact-row-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-row-text">
                  <span className="section-label">ALTERNATE</span>
                  <strong>+91 99621 25678</strong>
                </div>
                <ArrowUpRight size={18} className="contact-row-arrow" />
              </a>

              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="contact-row">
                <div className="contact-row-icon contact-row-icon--wa">
                  <MessageSquare size={18} />
                </div>
                <div className="contact-row-text">
                  <span className="section-label">WHATSAPP</span>
                  <strong>Chat Instantly</strong>
                </div>
                <ArrowUpRight size={18} className="contact-row-arrow" />
              </a>

              <a href="mailto:skproperties1999@gmail.com" className="contact-row">
                <div className="contact-row-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-row-text">
                  <span className="section-label">EMAIL</span>
                  <strong>skproperties1999@gmail.com</strong>
                </div>
                <ArrowUpRight size={18} className="contact-row-arrow" />
              </a>
            </div>

            {/* Address */}
            <div className="contact-address">
              <MapPin size={16} />
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                  14-B SK Villa, 9th Street, AGS Colony,
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                  Pallikaranai, Chennai – 600 100
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick message form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="contact-form-wrap"
          >
            {sent ? (
              <div className="sent-state">
                <CheckCircle2 size={44} style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>Enquiry Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', lineHeight: 1.6 }}>
                  Your message has been dispatched on WhatsApp. E. Senthil Kumar will respond shortly.
                </p>
                <button onClick={() => setSent(false)} className="btn btn-outline">Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: 4 }}>
                  Send Quick Enquiry
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 24 }}>
                  We'll respond on WhatsApp within 30 minutes.
                </p>

                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name</label>
                    <input
                      type="text" required placeholder="Full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone / WhatsApp</label>
                    <input
                      type="tel" required placeholder="10-digit number"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Type of Project</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                  >
                    <option>Villa Construction</option>
                    <option>Residential Apartment</option>
                    <option>Interior Design</option>
                    <option>Renovation / Floor Addition</option>
                    <option>Commercial Building</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Message</label>
                  <textarea
                    rows="3" placeholder="Tell us about your plot, budget or requirement..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={16} />
                  Send via WhatsApp
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 10 }}>
                  — or call directly on <a href="tel:9551258813" style={{ color: 'var(--accent)', fontWeight: 600 }}>9551258813</a> —
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0;
          background: var(--bg);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-rows {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 28px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: var(--transition);
          cursor: pointer;
        }
        .contact-row:first-child { padding-top: 0; }
        .contact-row:hover { opacity: 0.75; }
        .contact-row-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-primary);
          flex-shrink: 0;
        }
        .contact-row-icon--wa {
          background: #E8F8EE;
          border-color: #B5DEC5;
          color: #25A244;
        }
        .contact-row-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          flex: 1;
        }
        .contact-row-text strong {
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .contact-row-arrow {
          color: var(--text-muted);
        }
        .contact-address {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 16px;
          background: var(--surface);
          border-radius: 12px;
          border: 1px solid var(--border);
          color: var(--accent);
        }
        .contact-form-wrap {
          background: var(--bg-section);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .form-field input, .form-field select, .form-field textarea {
          background: var(--bg);
          border: 1px solid var(--border-dark);
          border-radius: 10px;
          padding: 11px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition);
          resize: none;
        }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(200,169,110,0.12);
        }
        .sent-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 40px 20px;
          text-align: center;
        }
        @media (max-width: 860px) {
          .contact-section { padding: 60px 0; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-form-wrap { padding: 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
