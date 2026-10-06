import React from 'react';
import { Compass, Sparkles, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-hero" id="landing-hero">
      <div className="landing-container">
        <div className="landing-hero-grid">
          
          {/* Left Text Box */}
          <div className="landing-hero-text">
            <div className="landing-hero-eyebrow">
              <Sparkles size={14} style={{ color: '#C59B27' }} />
              <span>JAIN CLOTH CENTRE • EST. 50+ YEARS</span>
            </div>

            <h1 className="landing-hero-title">
              Celebrate Every Occasion in Timeless Style.
            </h1>

            <p className="landing-hero-desc">
              Discover heritage handlooms, elegant bridal wear, and thoughtfully curated fashion for every generation.
            </p>

            <div className="landing-hero-buttons">
              <button className="landing-btn-primary" onClick={() => scrollToSection('collections')}>
                Explore Collections
              </button>

              <button className="landing-btn-secondary" onClick={() => scrollToSection('landing-store-section')}>
                <Compass size={16} />
                Visit Our Store
              </button>
            </div>
          </div>

          {/* Right Image Banner */}
          <div className="landing-hero-image-wrapper">
            <img 
              src="/assets/images/hero_family_1790677768538.jpg" 
              alt="Jain Cloth Centre Family Fashion" 
            />

            <div className="landing-hero-badge">
              <div className="landing-badge-icon">
                <Award size={20} />
              </div>
              <div>
                <div className="landing-badge-title">Ilkal Handloom Sanctuary</div>
                <div className="landing-badge-sub">50+ Years of Craftsmanship</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
