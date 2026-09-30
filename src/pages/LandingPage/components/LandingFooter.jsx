import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
              Preserving Karnataka's rich handloom heritage since 1978. Authentic Ilkal sarees, bridal trousseau sets, and curated family fashion.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <a href="https://www.instagram.com/jainclothcentre" target="_blank" rel="noreferrer" style={{ color: '#C59B27' }}>
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/jainclothcentre.ilkal/" target="_blank" rel="noreferrer" style={{ color: '#C59B27' }}>
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
                <button onClick={() => scrollToSection('landing-category-section')}>Collections</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-heritage-section')}>About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-store-section')}>Contact & Store</button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="landing-footer-col-title">Collections</h4>
            <ul className="landing-footer-list">
              <li>
                <button onClick={() => scrollToSection('landing-category-section')}>Ilkal Sarees</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-featured-section')}>Bridal Wear</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-category-section')}>Men's Ethnic</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('landing-category-section')}>Kids' Collection</button>
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
                <span>+91 9876543211 / +91 9448100000</span>
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
