import React from 'react';
import { Gem, Sparkles, Palette, ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const SpecialMoments = () => {
  const { setAppointmentModalOpen, openQuickView } = useUI();

  return (
    <section className="section-padding special-moments-section" id="moments">
      <div className="container moments-grid">
        
        {/* Left Content */}
        <div className="moments-content">
          <div className="moments-subtag">
            ROYAL NUPTIALS & SANGEET
          </div>
          
          <h2 className="moments-title">
            Made for Your Special<br />
            Moments
          </h2>
          
          <p className="moments-lead">
            Explore elegant traditional styles for weddings, celebrations, and unforgettable occasions. From grand bridal trousseaus to distinguished evening guest attire, our bespoke selections honor the gravity of your biggest celebrations.
          </p>

          <ul className="moments-feature-list">
            <li>
              <Gem size={18} className="moments-list-icon" />
              <span>Handcrafted Bridal Lehengas with Real Zari Filigree</span>
            </li>
            <li>
              <Sparkles size={18} className="moments-list-icon" />
              <span>Pure Kanjivaram, Banarasi, and Ilkal Royal Silks</span>
            </li>
            <li>
              <Palette size={18} className="moments-list-icon" />
              <span>Custom Color Palette Consultation for the Entire Entourage</span>
            </li>
          </ul>

          <button className="btn btn-olive-gold" onClick={() => setAppointmentModalOpen(true)}>
            DISCOVER BRIDAL COLLECTION
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Right Gallery Cards */}
        <div className="moments-cards-container">
          
          {/* Card 1: The Heritage Bride */}
          <div 
            className="moment-image-card" 
            onClick={() => openQuickView({
              title: 'The Heritage Bride',
              desc: 'Heirloom handloom silk sarees with handcrafted gold zari for grand weddings.',
              image: '/assets/images/moment_bridal_1790677986942.jpg'
            })}
          >
            <img src="/assets/images/moment_bridal_1790677986942.jpg" alt="The Heritage Bride" />
            <div className="moment-card-overlay">
              <strong className="moment-card-title">The Heritage Bride</strong>
              <span className="moment-card-sub">Heirloom Handloom Silks</span>
            </div>
          </div>

          {/* Card 2: Ceremonial Royalty */}
          <div 
            className="moment-image-card" 
            onClick={() => openQuickView({
              title: 'Ceremonial Royalty',
              desc: 'Bespoke groomsmen sherwanis, bandhgalas and wedding attire.',
              image: '/assets/images/moment_groom_1790678030005.jpg'
            })}
          >
            <img src="/assets/images/moment_groom_1790678030005.jpg" alt="Ceremonial Royalty" />
            <div className="moment-card-overlay">
              <strong className="moment-card-title">Ceremonial Royalty</strong>
              <span className="moment-card-sub">Bespoke Sherwanis & Suits</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SpecialMoments;
