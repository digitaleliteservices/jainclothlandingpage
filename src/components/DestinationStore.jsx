import React from 'react';
import { Store, Compass } from 'lucide-react';

const DestinationStore = () => {
  return (
    <section className="section-padding destination-section">
      <div className="container destination-grid">
        
        {/* Left Column: Store Interior Image & Floating Badge */}
        <div className="destination-img-column">
          <div className="destination-img-wrap">
            <img 
              src="/assets/images/store_interior.jpg" 
              alt="Jain Cloth Centre Showroom Interior" 
              className="destination-img" 
            />
            
            {/* Floating Heart of Ilkal Badge */}
            <div className="floating-location-card">
              <div className="location-icon-gold">
                <Store size={20} />
              </div>
              <div>
                <strong className="location-title">Heart of Ilkal</strong>
                <span className="location-sub">Bagalkot District, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text & Discover Store Button */}
        <div className="destination-content-column">
          <div className="destination-subtag">
            OUR TEXTILE LEGACY
          </div>
          
          <h2 className="destination-title">
            Your Destination for Family Fashion
          </h2>
          
          <p className="destination-lead-1">
            Jain Cloth Centre brings together traditional Indian clothing and contemporary styles, offering collections for weddings, celebrations, and everyday occasions.
          </p>

          <p className="destination-lead-2">
            Rooted deeply in the handloom capital of Ilkal, Karnataka, our establishment stands as a sanctuary for purists who value real warp-and-weft integrity, genuine gold zari luster, and the timeless dignity of authentic regional craftsmanship.
          </p>

          <a href="#location" className="btn btn-hero-primary" style={{ marginTop: '8px' }}>
            <Compass size={15} />
            DISCOVER OUR STORE
          </a>
        </div>

      </div>
    </section>
  );
};

export default DestinationStore;
