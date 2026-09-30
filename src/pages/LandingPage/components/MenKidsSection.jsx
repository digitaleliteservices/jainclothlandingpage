import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenKidsSection = () => {
  const scrollToFeatured = () => {
    const el = document.getElementById('landing-featured-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section-padding">
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            FAMILY EDITIONS
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Distinction for Grooms & Little Ones
          </h2>
        </div>

        <div className="landing-menkids-grid">
          {/* Men Block */}
          <div className="landing-editorial-card">
            <div className="landing-editorial-img">
              <img src="/assets/images/cat_menswear_1790677869067.jpg" alt="Men's Ethnic Wear" />
            </div>
            <div className="landing-editorial-body">
              <h3 className="landing-editorial-title">Men's Ethnic Wear</h3>
              <button className="landing-btn-secondary" onClick={scrollToFeatured}>
                <span>Explore Men's Collection</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Kids Block */}
          <div className="landing-editorial-card">
            <div className="landing-editorial-img">
              <img src="/assets/images/cat_kids_1790677909697.jpg" alt="Kids' Ethnic Wear" />
            </div>
            <div className="landing-editorial-body">
              <h3 className="landing-editorial-title">Kids' Ethnic Wear</h3>
              <button className="landing-btn-secondary" onClick={scrollToFeatured}>
                <span>Explore Kids' Collection</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenKidsSection;
