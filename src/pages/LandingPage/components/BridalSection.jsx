import React from 'react';
import { Sparkles } from 'lucide-react';

const BridalSection = () => {
  const scrollToFeatured = () => {
    const el = document.getElementById('landing-featured-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-bridal-section">
      <div className="landing-container">
        <div className="landing-bridal-grid">
          
          {/* Left Text */}
          <div className="landing-bridal-text">
            <div className="landing-section-subtag">
              <span className="landing-dec-line"></span>
              BRIDAL & TROUSSEAU ATELIER
            </div>

            <h2 className="landing-bridal-headline">
              For Moments That Become Memories
            </h2>

            <p className="landing-bridal-desc">
              Discover elegant bridal and ethnic styles curated for weddings, celebrations, and unforgettable occasions. From grand velvet lehengas to heritage silk drapes, we dress brides with unmatched grace.
            </p>

            <button className="landing-btn-primary" onClick={scrollToFeatured}>
              <Sparkles size={16} />
              <span>Explore Bridal Wear</span>
            </button>
          </div>

          {/* Right Images */}
          <div className="landing-bridal-images">
            <div className="landing-bridal-img-card">
              <img 
                src="/assets/images/moment_bridal_1790677986942.jpg" 
                alt="Jain Cloth Centre Bridal Couture" 
              />
            </div>
            <div className="landing-bridal-img-card" >
              <img 
                src="/assets/images/cat_bridal_lehenga_1790677826632.jpg" 
                alt="Jain Cloth Centre Bridal Lehenga" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BridalSection;
