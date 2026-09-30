import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';

const StoreLocation = () => {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Jain+Cloth+Centre+Ilkal", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919804882888?text=Namaste%20Jain%20Cloth%20Centre,%20I%20would%20like%20to%20visit%20your%20Ilkal%20showroom.", "_blank");
  };

  return (
    <section className="section-padding location-experience-section" id="location">
      <div className="container">
        
        {/* Centered Header */}
        <div className="location-header-text">
          <div className="collections-subtag center-subtag">
            <span className="line-dec"></span>
            IN-PERSON EXPERIENCE
            <span className="line-dec"></span>
          </div>
          <h2 className="location-main-headline">
            Visit Jain Cloth Centre
          </h2>
          <p className="location-main-lead">
            Explore our collections in person and find the perfect style for every occasion, assisted by our seasoned drape stylists.
          </p>
        </div>

        {/* Main Flagship Showroom Card */}
        <div className="location-main-card">
          
          {/* Left Showroom Details */}
          <div className="location-left-content">
            <div className="flagship-subtag">
              FLAGSHIP DESTINATION
            </div>

            <h3 className="showroom-title">
              Ilkal Heritage Showroom
            </h3>

            <div className="location-details-list">
              
              {/* Store Address */}
              <div className="location-detail-item">
                <div className="detail-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div className="detail-text-box">
                  <strong className="detail-label">Store Address:</strong>
                  <p className="detail-val">
                    Opposite SVM College, Bus Stand Road, Old Municipality Road, Ilkal, Bagalkot, Karnataka 587125
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="location-detail-item">
                <div className="detail-icon-wrap">
                  <Clock size={20} />
                </div>
                <div className="detail-text-box">
                  <strong className="detail-label">Business Hours:</strong>
                  <p className="detail-val">
                    Monday – Sunday: 10:00 AM – 9:00 PM
                  </p>
                  <span className="detail-subtext">Open on all festive days</span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="location-detail-item">
                <div className="detail-icon-wrap">
                  <Phone size={20} />
                </div>
                <div className="detail-text-box">
                  <strong className="detail-label">Phone & WhatsApp:</strong>
                  <p className="detail-val">
                    +91 98048 82888
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="location-actions-row">
              <button className="btn btn-burgundy-directions" onClick={openGoogleMaps}>
                <Navigation size={15} />
                GET DIRECTIONS
              </button>

              <button className="btn btn-grey-whatsapp" onClick={openWhatsApp}>
                <MessageCircle size={15} />
                CONNECT ON WHATSAPP
              </button>
            </div>

          </div>

          {/* Right Map Canvas Container with Interactive Google Map */}
          <div className="location-right-map" style={{ position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
            <iframe
              title="Jain Cloth Centre Google Maps Location"
              src="https://maps.google.com/maps?q=Jain%20Cloth%20Centre%20Ilkal&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%', minHeight: '380px', borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Center Floating Pin Pill */}
            <div className="map-burgundy-pin-pill" onClick={openGoogleMaps} style={{ cursor: 'pointer', zIndex: 10 }}>
              <div className="pin-icon-gold">
                <MapPin size={16} />
              </div>
              <span className="pin-title">Jain Cloth Centre • Ilkal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoreLocation;
