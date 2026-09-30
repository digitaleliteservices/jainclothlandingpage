import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useUI } from '../context/UIContext';

const Footer = () => {
  const { setAppointmentModalOpen, setBulkModalOpen } = useUI();

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src="/assets/images/logo.png" alt="Jain Cloth Centre" style={{ height: '44px', filter: 'brightness(1.2)' }} />
              <span className="brand-title">JAIN CLOTH CENTRE</span>
            </div>
            <p>
              Your ultimate destination for authentic silk sarees, bridal lehengas, royal menswear, and family ethnic fashion. 40+ years of trusted excellence.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/jainclothcentre" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/jainclothcentre.ilkal/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://wa.me/919804882888" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                <PhoneCall size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Curated Collections</a></li>
              <li><a href="#heritage">Heritage Sarees</a></li>
              <li><a href="#moments">Special Moments</a></li>
              <li><a href="#generations">Family Style</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setAppointmentModalOpen(true); }}>Bridal Consultation</a></li>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setBulkModalOpen(true); }}>Bulk Wedding Orders</a></li>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setAppointmentModalOpen(true); }}>Custom Tailoring & Stitching</a></li>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setAppointmentModalOpen(true); }}>Saree Draping Service</a></li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="footer-heading">Visit Store</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '12px', lineHeight: '1.6' }}>
              📍 Main Cloth Market, Town Hall Circle, Jain Cloth Centre Building
            </p>
            <p style={{ fontSize: '0.875rem', marginBottom: '8px' }}>
              📞 +91 98765 43210
            </p>
            <p style={{ fontSize: '0.875rem' }}>
              ⏰ 10:00 AM – 9:00 PM (Daily)
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 Jain Cloth Centre. All rights reserved.
          </div>
          <div>
            Crafted for Timeless Elegance & Family Heritage.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
