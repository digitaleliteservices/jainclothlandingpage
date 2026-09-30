import React from 'react';
import { useUI } from '../../../context/UIContext';
import { MessageCircle, Gift } from 'lucide-react';

const BulkOrderSection = () => {
  const { setBulkModalOpen } = useUI();

  const handleWhatsApp = () => {
    window.open("https://wa.me/919448100000?text=Namaste%20Jain%20Cloth%20Centre,%20I%20would%20like%20to%20enquire%20about%20a%20bulk%20order%20for%20our%20family%20event.", "_blank");
  };

  return (
    <section className="landing-section-padding">
      <div className="landing-container">
        <div className="landing-bulk-box">
          
          <div className="landing-bulk-info">
            <div className="landing-section-subtag" style={{ color: '#8B6D43' }}>
              <Gift size={16} />
              <span>WEDDINGS & FESTIVE ORDERS</span>
            </div>
            <h2 className="landing-bulk-title">
              Planning a Celebration or Bulk Order?
            </h2>
            <p className="landing-bulk-desc">
              Speak with our team for wedding groups, festive requirements, family occasions, and special custom orders. Enjoy coordinated styling and dedicated concierge assistance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="landing-btn-whatsapp-nav" onClick={handleWhatsApp} style={{ padding: '16px 28px', fontSize: '0.95rem' }}>
              <MessageCircle size={18} />
              <span>Enquire on WhatsApp</span>
            </button>

            <button className="landing-btn-primary" onClick={() => setBulkModalOpen(true)}>
              <span>Bulk Request Form</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
