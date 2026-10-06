import React from 'react';
import { Archive, Gift, Sparkles, Users, Plane, MessageSquare } from 'lucide-react';
import { useUI } from '../context/UIContext';

const BulkOrdersBox = () => {
  const { setBulkModalOpen } = useUI();

  const openWhatsAppBulk = () => {
    window.open("https://wa.me/919353977262?text=Hi%20Jain%20Cloth%20Centre,%20I%20have%20a%20bulk%20order%20inquiry", "_blank");
  };

  return (
    <section className="section-padding bulk-section" id="bulk-orders" style={{ paddingTop: 0 }}>
      <div className="container">
        
        {/* Main Soft Box Container */}
        <div className="bulk-orders-container">
          
          {/* Left Content */}
          <div className="bulk-left-content">
            <div className="bulk-subtag">
              <Archive size={18} strokeWidth={2} className="bulk-subtag-icon" />
              <span>BESPOKE & INSTITUTIONAL SUPPLY</span>
            </div>
            
            <h2 className="bulk-title">Looking for Bulk Orders?</h2>
            
            <p className="bulk-lead">
              Connect with Jain Cloth Centre for bulk clothing inquiries and discover collections suited to your requirements. We support large-scale traditional occasions, institutional events, and gifting programs with personalized dedication.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="bulk-features-grid">
              
              <div className="bulk-feature-card">
                <Gift size={18} className="bulk-card-icon" />
                <div>
                  <strong>Wedding Trousseau Gifting</strong>
                  <span>Coordinated Ilkal sarees and dhotis for guests.</span>
                </div>
              </div>

              <div className="bulk-feature-card">
                <Sparkles size={18} className="bulk-card-icon" />
                <div>
                  <strong>Festival Bulk Orders</strong>
                  <span>Temple festivals, pujas, and corporate gifting.</span>
                </div>
              </div>

              <div className="bulk-feature-card">
                <Users size={18} className="bulk-card-icon" />
                <div>
                  <strong>Uniform Ethnic Sets</strong>
                  <span>Theme-matched attire for dance groups & choirs.</span>
                </div>
              </div>

              <div className="bulk-feature-card">
                <Plane size={18} className="bulk-card-icon" />
                <div>
                  <strong>Worldwide Shipping Support</strong>
                  <span>Secure packaging for overseas diaspora consignments.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Callout Box */}
          <div className="bulk-callout-card">
            <div className="bulk-icon-square">
              <MessageSquare size={24} />
            </div>
            
            <h3 className="bulk-callout-title">Direct Bulk Consultation</h3>
            
            <p className="bulk-callout-desc">
              Speak directly with our showroom team to discuss fabrics, colorways, and fulfillment schedules.
            </p>
            
            <button className="btn btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={openWhatsAppBulk}>
              <MessageSquare size={16} />
              INQUIRE ON WHATSAPP
            </button>

            <span className="bulk-callout-footer">
              Prompt response within regular business hours
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BulkOrdersBox;
