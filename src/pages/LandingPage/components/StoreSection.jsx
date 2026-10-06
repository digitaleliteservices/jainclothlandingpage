import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';

const StoreSection = () => {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Jain+Cloth+Centre+Ilkal", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919353977262?text=Namaste%20Jain%20Cloth%20Centre,%20I%20am%20planning%20to%20visit%20your%20Ilkal%20showroom.", "_blank");
  };

  return (
    <section className="landing-section-padding" id="landing-store-section">
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            IN-PERSON SHOWROOM EXPERIENCE
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Come See It. Feel It. Wear It.
          </h2>
          <p className="landing-section-desc">
            Visit our flagship Ilkal showroom to experience authentic handloom textures, real gold zari, and personalized drape styling.
          </p>
        </div>

        <div className="landing-store-card">
          
          {/* Details Column */}
          <div className="landing-store-details">
            <span className="landing-store-badge">FLAGSHIP DESTINATION</span>
            <h3 className="landing-store-name">JAIN CLOTH CENTER</h3>

            <div className="landing-store-info-list">
              
              <div className="landing-store-info-item">
                <div className="landing-store-info-icon">
                  <MapPin size={20} />
                </div>
                <div className="landing-store-info-text">
                  <strong>Store Address:</strong>
                  <p>Opposite SVM College, Bus Stand Road, Old Municipality Road, Ilkal, Bagalkot, Karnataka 587125</p>
                </div>
              </div>

              <div className="landing-store-info-item">
                <div className="landing-store-info-icon">
                  <Clock size={20} />
                </div>
                <div className="landing-store-info-text">
                  <strong>Business Hours:</strong>
                  <p>Monday – Sunday: 10:00 AM – 8:00 PM <br/><span style={{ fontSize: '0.8rem', color: '#8B6D43' }}>(Open on all festive days)</span></p>
                </div>
              </div>

              <div className="landing-store-info-item">
                <div className="landing-store-info-icon">
                  <Phone size={20} />
                </div>
                <div className="landing-store-info-text">
                  <strong>Phone & WhatsApp:</strong>
                  <p><a href="https://wa.me/919353977262" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93539 77262</a></p>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="landing-btn-primary" onClick={openGoogleMaps}>
                <Navigation size={16} />
                <span>Get Directions</span>
              </button>

              <button className="landing-btn-secondary" onClick={openWhatsApp}>
                <MessageCircle size={16} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Map Column with Interactive Google Map */}
          <div className="landing-store-map" style={{ position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
            <iframe
              title="Jain Cloth Centre Landing Page Google Map Location"
              src="https://maps.google.com/maps?q=Jain%20Cloth%20Centre%20Ilkal&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%', minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="landing-store-pin-pill" onClick={openGoogleMaps} style={{ cursor: 'pointer', zIndex: 10 }}>
              <MapPin size={18} style={{ color: '#F4E8C1' }} />
              <span>Jain Cloth Centre • Ilkal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoreSection;
