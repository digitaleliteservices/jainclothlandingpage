import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const HeritageSarees = () => {
  const { openQuickView } = useUI();

  return (
    <section className="section-padding saree-heritage-section" id="heritage">
      <div className="container">
        
        {/* Centered Header */}
        <div className="text-center">
          <div className="heritage-subtag">
            EXPLORE OUR HISTORICAL HERITAGE
          </div>
          <h2 className="section-title">The Timeless Beauty of Ilkal Sarees</h2>
          <p className="section-subtitle">
            Discover traditional weaves that bring together beautiful colors, distinctive patterns, and timeless Indian elegance woven straight from the looms of Karnataka.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="heritage-grid">
          
          {/* Left Column: 3 Feature Cards */}
          <div className="heritage-feature-cards">
            
            {/* Card 1 */}
            <div className="heritage-card">
              <div className="heritage-icon-box">
                <img src="/assets/images/icon_topi_teni.png" alt="Topi Teni Pallu" className="heritage-icon-img" />
              </div>
              <div className="heritage-card-body">
                <h4>Topi Teni Pallu</h4>
                <p>
                  The iconic red-and-white pallu connected through the legendary Kondi technique, joining body and pallu seamlessly with silk threads and warp.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="heritage-card">
              <div className="heritage-icon-box">
                <img src="/assets/images/icon_chikki_paras.png" alt="Chikki Paras & Gomi Borders" className="heritage-icon-img" />
              </div>
              <div className="heritage-card-body">
                <h4>Chikki Paras & Gomi Borders</h4>
                <p>
                  Distinctive temple-triangular serrations and classic Gomi borders woven with pure gold zari and fine mercerized cotton.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="heritage-card">
              <div className="heritage-icon-box">
                <img src="/assets/images/icon_kasuti.png" alt="Kasuti Embroidery Embellishments" className="heritage-icon-img" />
              </div>
              <div className="heritage-card-body">
                <h4>Kasuti Embroidery Embellishments</h4>
                <p>
                  Delicate hand-sewn motifs featuring palanquins, gopurams, and elephants woven directly into the fabric, sacred Karnataka heritage.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Image Showcase & Detail Pill Bar */}
          <div className="heritage-visual-column">
            <div className="heritage-img-card">
              <img 
                src="/assets/images/saree_detail_banner_1790677948638.jpg" 
                alt="Ilkal Saree Detail Macro View" 
                className="heritage-showcase-img"
              />
              <div className="heritage-img-overlay">
                <span className="overlay-tag">ILKAL HANDLOOM • SPECIAL EDITION</span>
                <p className="overlay-quote">
                  Handcrafted with pure mulberry silk warps and combed cotton, breathable body.
                </p>
              </div>
            </div>

            {/* Bottom Specs & Button Bar */}
            <div className="heritage-bottom-bar">
              <div className="spec-pills-row">
                <span className="spec-pill">PALLU: RED & WHITE KONDI</span>
                <span className="spec-pill">TEXTILE: PURE SILK & COTTON</span>
                <span className="spec-pill">PROTECTION: GI CERTIFIED</span>
              </div>
              <button 
                className="btn btn-hero-primary" 
                style={{ marginTop: '16px' }}
                onClick={() => openQuickView({
                  title: 'Ilkal Silk Sarees',
                  desc: 'Traditional Karnataka Ilkal saree woven with pure mulberry silk warps and Topi Teni pallu.',
                  image: '/assets/images/saree_detail_banner_1790677948638.jpg'
                })}
              >
                EXPLORE ILKAL COLLECTION
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeritageSarees;
