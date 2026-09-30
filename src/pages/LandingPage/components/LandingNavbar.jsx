import React from 'react';
import { useUI } from '../../../context/UIContext';
import { Search, MessageCircle, MapPin } from 'lucide-react';

const LandingNavbar = () => {
  const { setSearchModalOpen } = useUI();

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919448100000?text=Namaste%20Jain%20Cloth%20Centre,%20I%20am%20exploring%20your%20landing%20page%20collection.", "_blank");
  };

  return (
    <nav className="landing-navbar">
      <div className="landing-container landing-navbar-inner">
        {/* Brand Logo */}
        <div className="landing-nav-logo" onClick={() => scrollToSection('top')}>
          <img src="/assets/images/logo.png" alt="Jain Cloth Centre Logo" />
          <div className="landing-logo-text-wrap">
            <span className="landing-brand-name">Jain Cloth Centre</span>
            <span className="landing-brand-sub">EST. 1978 • ILKAL</span>
          </div>
        </div>

        {/* Navigation Links - Stay within Landing Page */}
        <ul className="landing-nav-links">
          <li>
            <button className="landing-nav-link" onClick={() => scrollToSection('top')}>
              Home
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => scrollToSection('landing-category-section')}>
              Collections
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => scrollToSection('landing-heritage-section')}>
              About Us
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => scrollToSection('landing-store-section')}>
              Contact
            </button>
          </li>
        </ul>

        {/* Header Actions */}
        <div className="landing-nav-actions">
          <button 
            className="landing-btn-icon" 
            onClick={() => setSearchModalOpen(true)}
            title="Search Collections"
          >
            <Search size={18} />
          </button>

          <button 
            className="landing-btn-whatsapp-nav" 
            onClick={handleWhatsApp}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>

          <button 
            className="landing-btn-store-nav" 
            onClick={() => scrollToSection('landing-store-section')}
          >
            <MapPin size={16} />
            <span>Visit Store</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
