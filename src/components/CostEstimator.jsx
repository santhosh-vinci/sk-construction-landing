import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Phone, Sparkles, Building, Info, FileText } from 'lucide-react';

export default function CostEstimator() {
  const [area, setArea] = useState(2400);
  const [packageType, setPackageType] = useState('premium');
  const [addons, setAddons] = useState({
    compoundWall: true,
    solarWater: false,
    terraceGarden: false,
    smartAutomation: false
  });

  const packages = {
    standard: {
      name: "Standard Turnkey",
      rate: 2200,
      desc: "High quality RCC structure, standard red brick, 2x2 vitrified tiles, Jaquar fittings, and Asian Paints.",
      badge: "Best Value"
    },
    premium: {
      name: "Premium Luxury",
      rate: 2600,
      desc: "Reinforced structure, 4x2 Kajaria tiles, Teakwood main door, Kohler bath fixtures, modular electricals.",
      badge: "Most Popular"
    },
    villa: {
      name: "Ultra Villa Package",
      rate: 3300,
      desc: "Italian marble flooring, Burma teak joinery, Grohe fittings, smart home automation, glass balconies.",
      badge: "Signature"
    },
    interiors: {
      name: "Full Interior Only",
      rate: 650,
      desc: "BWP Plywood modular kitchen, wardrobe wood works, cove false ceilings, wall accents.",
      badge: "Interior"
    }
  };

  const addonPrices = {
    compoundWall: 150000,
    solarWater: 95000,
    terraceGarden: 180000,
    smartAutomation: 120000
  };

  const selectedPkg = packages[packageType];
  const baseCost = area * selectedPkg.rate;

  let totalAddonsCost = 0;
  if (addons.compoundWall) totalAddonsCost += addonPrices.compoundWall;
  if (addons.solarWater) totalAddonsCost += addonPrices.solarWater;
  if (addons.terraceGarden) totalAddonsCost += addonPrices.terraceGarden;
  if (addons.smartAutomation) totalAddonsCost += addonPrices.smartAutomation;

  const grandTotal = baseCost + totalAddonsCost;

  // Timeline estimation
  let timeline = "6-8 Months";
  if (area > 3500) timeline = "10-14 Months";
  else if (area > 2000) timeline = "8-10 Months";
  if (packageType === 'interiors') timeline = "45-60 Days";

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(grandTotal);

  const formattedBase = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(baseCost);

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hi E. Senthil Kumar sir, I used your SK Construction online cost calculator:\n\n` +
    `• Built-up Area: ${area} sq.ft\n` +
    `• Package: ${selectedPkg.name} (₹${selectedPkg.rate}/sq.ft)\n` +
    `• Estimated Budget: ${formattedTotal}\n` +
    `• Est. Timeline: ${timeline}\n\n` +
    `Please contact me for an official site inspection.`
  );
  const whatsappUrl = `https://wa.me/919962125678?text=${whatsappMessage}`;

  return (
    <section id="estimator" className="estimator-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag"><Calculator size={14} /> CHENNAI COST ESTIMATOR</div>
          <h2 className="section-title">
            Calculate Your Construction & <span className="gold-text">Interior Budget</span>
          </h2>
          <p className="section-subtitle">
            Get an instant, transparent estimate for your project in Chennai. Tailored with current 2026 material rates for steel, cement, granite, and labor.
          </p>
        </div>

        <div className="estimator-card glass-card">
          <div className="estimator-grid">
            {/* Left Inputs */}
            <div className="estimator-controls">
              {/* Step 1: Area Slider */}
              <div className="control-group">
                <div className="label-row">
                  <label className="control-label">1. Total Built-up Area (sq.ft)</label>
                  <span className="area-value-display gold-text">{area.toLocaleString()} sq.ft</span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="8000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="area-range-slider"
                />
                <div className="range-hints">
                  <span>600 sq.ft (Compact)</span>
                  <span>2,400 sq.ft (Standard Villa)</span>
                  <span>8,000 sq.ft (Apartments)</span>
                </div>
              </div>

              {/* Step 2: Package Selector */}
              <div className="control-group">
                <label className="control-label">2. Select Specification Package</label>
                <div className="packages-grid">
                  {Object.keys(packages).map((key) => {
                    const pkg = packages[key];
                    const isSelected = packageType === key;
                    return (
                      <div
                        key={key}
                        className={`package-card ${isSelected ? 'selected-package' : ''}`}
                        onClick={() => setPackageType(key)}
                      >
                        <div className="pkg-header">
                          <span className="pkg-name">{pkg.name}</span>
                          <span className="badge badge-gold">{pkg.badge}</span>
                        </div>
                        <div className="pkg-rate">₹{pkg.rate} <span className="per-sq">/ sq.ft</span></div>
                        <p className="pkg-desc">{pkg.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Optional Addons */}
              {packageType !== 'interiors' && (
                <div className="control-group">
                  <label className="control-label">3. Optional Add-on Features</label>
                  <div className="addons-grid">
                    <label className={`addon-checkbox ${addons.compoundWall ? 'addon-active' : ''}`}>
                      <input
                        type="checkbox"
                        checked={addons.compoundWall}
                        onChange={() => toggleAddon('compoundWall')}
                      />
                      <span>Compound Wall & Designer Gate (+₹1.5 Lakhs)</span>
                    </label>

                    <label className={`addon-checkbox ${addons.solarWater ? 'addon-active' : ''}`}>
                      <input
                        type="checkbox"
                        checked={addons.solarWater}
                        onChange={() => toggleAddon('solarWater')}
                      />
                      <span>Solar Water Heating System (+₹95k)</span>
                    </label>

                    <label className={`addon-checkbox ${addons.terraceGarden ? 'addon-active' : ''}`}>
                      <input
                        type="checkbox"
                        checked={addons.terraceGarden}
                        onChange={() => toggleAddon('terraceGarden')}
                      />
                      <span>Terrace Gazebo & Waterproof Tile Roof (+₹1.8 Lakhs)</span>
                    </label>

                    <label className={`addon-checkbox ${addons.smartAutomation ? 'addon-active' : ''}`}>
                      <input
                        type="checkbox"
                        checked={addons.smartAutomation}
                        onChange={() => toggleAddon('smartAutomation')}
                      />
                      <span>Smart Video Doorbell & Touch Switches (+₹1.2 Lakhs)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Right Summary Display */}
            <div className="estimator-summary-panel">
              <div className="summary-header">
                <Sparkles size={20} className="gold-text" />
                <h3>Estimated Project Summary</h3>
              </div>

              <div className="summary-details">
                <div className="summary-line">
                  <span>Selected Area</span>
                  <strong>{area.toLocaleString()} sq.ft</strong>
                </div>

                <div className="summary-line">
                  <span>Package Tier</span>
                  <strong>{selectedPkg.name}</strong>
                </div>

                <div className="summary-line">
                  <span>Base Rate</span>
                  <strong>₹{selectedPkg.rate} / sq.ft</strong>
                </div>

                <div className="summary-line">
                  <span>Base Civil & Finish Cost</span>
                  <strong>{formattedBase}</strong>
                </div>

                {packageType !== 'interiors' && (
                  <div className="summary-line">
                    <span>Add-ons Total</span>
                    <strong>₹{totalAddonsCost.toLocaleString('en-IN')}</strong>
                  </div>
                )}

                <div className="summary-line">
                  <span>Est. Completion Time</span>
                  <span className="badge badge-gold">{timeline}</span>
                </div>
              </div>

              <div className="total-cost-box">
                <div className="total-label">Estimated Total Budget</div>
                <div className="total-amount gold-text">{formattedTotal}</div>
                <div className="total-disclaimer">
                  *Estimate includes architectural design, foundation, steel, cement, tiles, plumbing, electrical & labor.
                </div>
              </div>

              <div className="summary-actions">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-block pulse-glow">
                  <MessageSquare size={18} />
                  <span>Send Estimate to E. Senthil Kumar via WhatsApp</span>
                </a>

                <a href="tel:9962125678" className="btn btn-call btn-block">
                  <Phone size={18} />
                  <span>Call Builder (9962125678)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .estimator-section {
          padding: 90px 0;
          background: #0b0f19;
        }

        .estimator-card {
          border: 1px solid var(--border-gold);
          box-shadow: var(--shadow-dark);
          padding: 36px;
        }

        .estimator-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 36px;
        }

        .estimator-controls {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .control-label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
        }

        .area-value-display {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
        }

        .area-range-slider {
          width: 100%;
          accent-color: var(--gold-primary);
          height: 8px;
          border-radius: 4px;
          background: #1f293d;
          cursor: pointer;
        }

        .range-hints {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .package-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .package-card:hover {
          border-color: var(--border-gold);
        }

        .package-card.selected-package {
          background: rgba(212, 175, 55, 0.08);
          border-color: var(--gold-primary);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
        }

        .pkg-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .pkg-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .pkg-rate {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--gold-primary);
        }

        .per-sq {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .pkg-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .addons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .addon-checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-sub);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .addon-checkbox input {
          accent-color: var(--gold-primary);
        }

        .addon-checkbox.addon-active {
          border-color: var(--gold-primary);
          background: rgba(212, 175, 55, 0.06);
          color: #ffffff;
        }

        .estimator-summary-panel {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border-gold-strong);
          border-radius: var(--radius-md);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .summary-header {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .summary-header h3 {
          font-size: 1.2rem;
        }

        .summary-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .summary-line strong {
          color: #ffffff;
        }

        .total-cost-box {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 20px;
          text-align: center;
          margin-bottom: 24px;
        }

        .total-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .total-amount {
          font-family: var(--font-heading);
          font-size: 2.3rem;
          font-weight: 900;
          line-height: 1.2;
          margin: 6px 0;
        }

        .total-disclaimer {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .summary-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .estimator-grid {
            grid-template-columns: 1fr;
          }
          .packages-grid, .addons-grid {
            grid-template-columns: 1fr;
          }
          .estimator-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
