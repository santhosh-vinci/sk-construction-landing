import React, { useState } from 'react';
import { X, User, Lock, Search, CheckCircle2, Shield, ArrowRight, Building, Key, HardHat } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register' | 'track'
  const [projectIdInput, setProjectIdInput] = useState('');
  const [trackedProject, setTrackedProject] = useState(null);
  const [trackError, setTrackError] = useState('');

  // Demo Project tracking simulator
  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setTrackError('');
    if (!projectIdInput.trim()) {
      setTrackError('Please enter a valid Project ID (e.g., SK-2024-01)');
      return;
    }

    // Mock tracking result
    setTrackedProject({
      id: projectIdInput.toUpperCase(),
      clientName: "Valued Client",
      siteLocation: "Pallikaranai, AGA Colony, Chennai",
      builderInCharge: "E. Senthil Kumar",
      overallProgress: 75,
      milestones: [
        { name: "Plan Approval & Soil Test", status: "Completed", date: "Jan 10, 2024" },
        { name: "Foundation & Basement Slab", status: "Completed", date: "Mar 05, 2024" },
        { name: "First & Second Floor RCC Framing", status: "Completed", date: "May 20, 2024" },
        { name: "Brick Masonry & Electrical Piping", status: "Completed", date: "Jul 15, 2024" },
        { name: "Plastering & Interior Woodwork", status: "In Progress", date: "Aug 2024" },
        { name: "Flooring, Painting & Key Handover", status: "Upcoming", date: "Oct 2024" }
      ]
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="portal-close-btn" onClick={onClose} aria-label="Close client portal modal">
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="portal-modal-header">
          <div className="portal-icon-bg">
            <Building size={24} />
          </div>
          <div>
            <h3 className="portal-title">SK Client Portal</h3>
            <p className="portal-sub">Track site progress & connect with E. Senthil Kumar</p>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="portal-tabs">
          <button 
            className={`portal-tab-btn ${activeTab === 'login' ? 'active-p-tab' : ''}`}
            onClick={() => setActiveTab('login')}
            aria-label="Sign in to client portal"
            aria-pressed={activeTab === 'login'}
          >
            <User size={15} />
            <span>Sign In</span>
          </button>

          <button 
            className={`portal-tab-btn ${activeTab === 'register' ? 'active-p-tab' : ''}`}
            onClick={() => setActiveTab('register')}
            aria-label="Register for client portal"
            aria-pressed={activeTab === 'register'}
          >
            <Key size={15} />
            <span>Register</span>
          </button>

          <button 
            className={`portal-tab-btn ${activeTab === 'track' ? 'active-p-tab' : ''}`}
            onClick={() => setActiveTab('track')}
            aria-label="Track project status without logging in"
            aria-pressed={activeTab === 'track'}
          >
            <Search size={15} />
            <span>Track Project</span>
          </button>
        </div>

        {/* Tab 1: Login */}
        {activeTab === 'login' && (
          <form className="portal-form" onSubmit={(e) => { e.preventDefault(); alert("Backend login ready! Enter client credentials."); }}>
            <div className="form-group">
              <label>Registered Phone Number / Email</label>
              <input type="text" placeholder="e.g. 9551258813 or client@gmail.com" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" defaultChecked />
                <span>Remember this device</span>
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Please call E. Senthil Kumar at 9551258813 for password reset."); }}>Forgot Password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <span>Sign In to Dashboard</span>
            </button>

            <div className="backend-note">
              <Shield size={14} className="gold-text" />
              <span>Future Backend Integration Ready: REST API / Firebase Auth endpoint ready.</span>
            </div>
          </form>
        )}

        {/* Tab 2: Register */}
        {activeTab === 'register' && (
          <form className="portal-form" onSubmit={(e) => { e.preventDefault(); alert("Account registration request received! Builder E. Senthil Kumar will activate your portal access."); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label>Mobile Number (for OTP)</label>
              <input type="tel" placeholder="10-digit mobile number" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@domain.com" required />
            </div>

            <div className="form-group">
              <label>Plot / Project Location in Chennai</label>
              <input type="text" placeholder="e.g. Pallikaranai, OMR, Velachery" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <span>Create Client Account</span>
            </button>
          </form>
        )}

        {/* Tab 3: Track Project ID */}
        {activeTab === 'track' && (
          <div className="track-tab-content">
            <form onSubmit={handleTrackSubmit} className="track-form">
              <label className="track-label">Enter Your SK Project Reference ID</label>
              <div className="track-input-group">
                <input
                  type="text"
                  placeholder="Try 'SK-2024-01' or your project code"
                  value={projectIdInput}
                  onChange={(e) => setProjectIdInput(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  <Search size={16} />
                  <span>Track</span>
                </button>
              </div>
              {trackError && <div className="track-error">{trackError}</div>}
              <div className="track-hint">Sample Code for Demo: <code>SK-2024-01</code></div>
            </form>

            {trackedProject && (
              <div className="tracked-result-box">
                <div className="tracked-header">
                  <div>
                    <span className="badge badge-gold">{trackedProject.id}</span>
                    <h4 className="tracked-title">{trackedProject.siteLocation}</h4>
                  </div>
                  <div className="progress-badge">{trackedProject.overallProgress}% Completed</div>
                </div>

                {/* Progress Bar */}
                <div className="progress-bar-track">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${trackedProject.overallProgress}%` }}
                  ></div>
                </div>

                <div className="milestones-list">
                  {trackedProject.milestones.map((m, idx) => (
                    <div key={idx} className="milestone-item">
                      <CheckCircle2 
                        size={16} 
                        className={m.status === 'Completed' ? 'gold-text' : m.status === 'In Progress' ? 'progress-icon' : 'muted-icon'} 
                      />
                      <span className="m-name">{m.name}</span>
                      <span className="m-status-tag">{m.status} ({m.date})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .portal-modal-card {
          background: #0f172a;
          border: 1px solid var(--border-gold-strong);
          border-radius: var(--radius-lg);
          max-width: 520px;
          width: 100%;
          padding: 32px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .portal-close-btn:hover {
          background: var(--gold-primary);
          color: #000;
        }

        .portal-modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .portal-icon-bg {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0b0f19;
          flex-shrink: 0;
        }

        .portal-title {
          font-size: 1.35rem;
          color: #ffffff;
        }

        .portal-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .portal-tabs {
          display: flex;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 4px;
          margin-bottom: 24px;
        }

        .portal-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .portal-tab-btn.active-p-tab {
          background: var(--gold-gradient);
          color: #0b0f19;
          font-weight: 700;
        }

        .portal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .form-options a {
          color: var(--gold-primary);
          text-decoration: none;
        }

        .backend-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          padding: 10px;
          border-radius: var(--radius-sm);
          margin-top: 4px;
        }

        .track-tab-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .track-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-sub);
          display: block;
          margin-bottom: 8px;
        }

        .track-input-group {
          display: flex;
          gap: 8px;
        }

        .track-input-group input {
          flex: 1;
          background: rgba(11, 15, 25, 0.8);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
        }

        .track-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .track-hint code {
          color: var(--gold-primary);
          font-weight: bold;
        }

        .track-error {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 4px;
        }

        .tracked-result-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tracked-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .tracked-title {
          font-size: 1rem;
          color: #ffffff;
          margin-top: 4px;
        }

        .progress-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--gold-primary);
        }

        .progress-bar-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--gold-gradient);
          border-radius: 4px;
        }

        .milestones-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.82rem;
        }

        .milestone-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .m-name {
          color: #ffffff;
          flex: 1;
        }

        .m-status-tag {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .progress-icon { color: #60A5FA; }
        .muted-icon { color: #475569; }
      `}</style>
    </div>
  );
}
