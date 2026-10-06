import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-finalcta-wrapper">
      <div className="landing-container">
        
        <div className="landing-finalcta-card">
          <div className="landing-section-subtag" style={{ color: '#F4E8C1' }}>
            <Sparkles size={14} />
            <span>JOIN THE LEGACY</span>
          </div>

          <h2 className="landing-finalcta-title">
            Your Next Look Starts Here.
          </h2>

          <p className="landing-finalcta-desc">
            Explore timeless Indian fashion, crafted for celebrations, traditions, and everyday elegance.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="landing-btn-primary" onClick={() => scrollToSection('collections')}>
              Explore Collections
            </button>

            <button 
              className="landing-btn-secondary" 
              style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
              onClick={() => scrollToSection('landing-store-section')}
            >
              <Compass size={16} />
              <span>Visit Our Store</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
