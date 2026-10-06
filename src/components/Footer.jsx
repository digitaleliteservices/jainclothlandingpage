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
              Your ultimate destination for authentic silk sarees, bridal lehengas, royal menswear, and family ethnic fashion. 50+ years of trusted excellence.
            </p>
            <div className="social-links">
              <a href="https://whatsapp.com/channel/0029VbCvBls7NoZzRZaBOB1O" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp Channel">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.77 14.64 11.98 14.38 11.04 13.54C10.31 12.89 9.81 12.08 9.67 11.84C9.53 11.59 9.65 11.46 9.77 11.34C9.88 11.23 10.02 11.05 10.14 10.91C10.26 10.77 10.3 10.66 10.38 10.5C10.46 10.34 10.42 10.2 10.36 10.08C10.3 9.96 9.81 8.75 9.6 8.26C9.4 7.78 9.2 7.85 9.05 7.84H8.58C8.42 7.84 8.15 7.9 7.93 8.14C7.7 8.39 7.07 8.98 7.07 10.18C7.07 11.38 7.95 12.54 8.07 12.7C8.19 12.86 9.79 15.34 12.25 16.4C12.84 16.65 13.29 16.8 13.65 16.92C14.24 17.11 14.78 17.08 15.2 17.02C15.68 16.95 16.67 16.42 16.88 15.83C17.08 15.25 17.08 14.75 17.02 14.65C16.96 14.54 16.81 14.48 16.56 14.41Z"/></svg>
              </a>
              <a href="https://www.instagram.com/jainclothcentre/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/jainclothcentre.ilkal/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://wa.me/919353977262" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp Direct">
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
              📞 <a href="https://wa.me/919353977262" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93539 77262</a>
            </p>
            <p style={{ fontSize: '0.875rem' }}>
              ⏰ 10:00 AM – 8:00 PM (Daily)
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
