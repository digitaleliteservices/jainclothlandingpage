import React from 'react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import JainClothesStore from "../../../assets/store.jpeg"

const HeritageSection = () => {
  const scrollToFeatured = () => {
    const el = document.getElementById('landing-featured-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section-padding landing-heritage-section" id="landing-heritage-section">
      <div className="landing-container">
        <div className="landing-heritage-grid">
          
          {/* Left Column: Image Box */}
          <div className="landing-heritage-img-box">
            <img 
              src={JainClothesStore}
              alt="Ilkal Saree Craftsmanship Pallu" 
            />
          </div>

          {/* Right Column: Text & Features */}
          <div className="landing-heritage-content-box">
            <div className="landing-section-subtag">
              <span className="landing-dec-line"></span>
              CENTURIES OF WEAVING INTEGRITY
            </div>

            <h2 className="landing-section-headline">
              The Legacy of Jain Cloth Centre
            </h2>

            <p className="landing-section-desc">
              For over four decades, Jain Cloth Centre has stood as a guardian of Ilkal’s legendary textile sanctuary. We preserve authentic pit-loom weaving, genuine silk warp integration, and timeless craft traditions passed down through master artisan families.
            </p>

            <div className="landing-heritage-feature-list">
              <div className="landing-heritage-feature-item">
                <div className="landing-heritage-feature-icon">
                  <Award size={16} />
                </div>
                <div className="landing-heritage-feature-text">
                  <strong>GI-Tagged Safeguard (#43)</strong>
                  <span>Certified genuine Ilkal weave with authentic Topi Teni red silk pallu joint.</span>
                </div>
              </div>

              <div className="landing-heritage-feature-item">
                <div className="landing-heritage-feature-icon">
                  <ShieldCheck size={16} />
                </div>
                <div className="landing-heritage-feature-text">
                  <strong>Pure Silk & Chikki Paras Patterns</strong>
                  <span>Handcrafted with precision 80s/100s cotton warp and pure Mulberry silk borders.</span>
                </div>
              </div>

              <div className="landing-heritage-feature-item">
                <div className="landing-heritage-feature-icon">
                  <Sparkles size={16} />
                </div>
                <div className="landing-heritage-feature-text">
                  <strong>Direct Artisan Dignity</strong>
                  <span>Supporting 500+ master artisan families directly in the historic town of Ilkal.</span>
                </div>
              </div>
            </div>

            <button className="landing-btn-primary" onClick={()=> window.location.href = "#collections"}>
              Discover Ilkal Collection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
