import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.77 14.64 11.98 14.38 11.04 13.54C10.31 12.89 9.81 12.08 9.67 11.84C9.53 11.59 9.65 11.46 9.77 11.34C9.88 11.23 10.02 11.05 10.14 10.91C10.26 10.77 10.3 10.66 10.38 10.5C10.46 10.34 10.42 10.2 10.36 10.08C10.3 9.96 9.81 8.75 9.6 8.26C9.4 7.78 9.2 7.85 9.05 7.84H8.58C8.42 7.84 8.15 7.9 7.93 8.14C7.7 8.39 7.07 8.98 7.07 10.18C7.07 11.38 7.95 12.54 8.07 12.7C8.19 12.86 9.79 15.34 12.25 16.4C12.84 16.65 13.29 16.8 13.65 16.92C14.24 17.11 14.78 17.08 15.2 17.02C15.68 16.95 16.67 16.42 16.88 15.83C17.08 15.25 17.08 14.75 17.02 14.65C16.96 14.54 16.81 14.48 16.56 14.41Z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LandingFooter = () => {

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="landing-footer">
      <div className="landing-container">
        
        <div className="landing-footer-grid">
          
          {/* Brand Column */}
          <div>
            <h3 className="landing-footer-brand-title">Jain Cloth Centre</h3>
            <p className="landing-footer-brand-desc">
              Preserving Karnataka's rich handloom heritage since 1970. Authentic Ilkal sarees, bridal trousseau sets, and curated family fashion.
            </p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a href="https://whatsapp.com/channel/0029VbCvBls7NoZzRZaBOB1O" target="_blank" rel="noreferrer" style={{ color: '#C59B27' }} title="WhatsApp Channel">
                <WhatsAppIcon size={20} />
              </a>
              <a href="https://www.instagram.com/jainclothcentre/" target="_blank" rel="noreferrer" style={{ color: '#C59B27' }} title="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/jainclothcentre.ilkal/" target="_blank" rel="noreferrer" style={{ color: '#C59B27' }} title="Facebook">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="landing-footer-col-title">Quick Links</h4>
            <ul className="landing-footer-list">
              <li>
                <button onClick={() => scrollToSection('top')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-category-section')}>Shop by Category</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-heritage-section')}>Our 50-Year Legacy</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')}>Curated Collections</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('heritage')}>Ilkal Sarees</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('moments')}>Special Moments (Bridal)</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('generations')}>Family Fashion</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('bulk-orders')}>Bulk & Wedding Orders</button>
              </li>
            </ul>
          </div>

          {/* Highlights & Experience */}
          <div>
            <h4 className="landing-footer-col-title">Discover Experience</h4>
            <ul className="landing-footer-list">
              <li>
                <button onClick={() => scrollToSection('destination-store')}>Showroom Experience</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guarantee')}>Our 4-Point Guarantee</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')}>Style Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-store-section')}>Store Location & Directions</button>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029VbCvBls7NoZzRZaBOB1O" target="_blank" rel="noopener noreferrer">
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jainclothcentre/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/jainclothcentre.ilkal/" target="_blank" rel="noopener noreferrer">
                  Follow on Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="landing-footer-col-title">Visit & Contact</h4>
            <ul className="landing-footer-list">
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#C59B27', flexShrink: 0, marginTop: '2px' }} />
                <span>Main Bazar Road, Near Gandhi Chowk, Ilkal, Karnataka – 587125</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#C59B27', flexShrink: 0 }} />
                <a href="https://wa.me/919353977262" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93539 77262</a>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#C59B27', flexShrink: 0 }} />
                <span>contact@jainclothcentre.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="landing-footer-bottom">
          <span>© 2026 Jain Cloth Centre. All rights reserved.</span>
          <span>Authentic Handlooms • Bagalkot District • Karnataka Heritage</span>
        </div>

      </div>
    </footer>
  );
};

export default LandingFooter;
