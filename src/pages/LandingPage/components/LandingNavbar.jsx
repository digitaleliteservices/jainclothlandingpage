import React, { useState } from 'react';
import { useUI } from '../../../context/UIContext';
import { Search, MessageCircle, MapPin, Menu, X } from 'lucide-react';

const LandingNavbar = () => {
  const { setSearchModalOpen } = useUI();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
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
    window.open("https://wa.me/919353977262?text=Namaste%20Jain%20Cloth%20Centre,%20I%20am%20exploring%20your%20landing%20page%20collection.", "_blank");
  };

  return (
    <>
      <nav className="landing-navbar">
        <div className="landing-container landing-navbar-inner">
          {/* Brand Logo */}
          <div className="landing-nav-logo" onClick={() => scrollToSection('top')}>
            <img src="/assets/images/logo.png" alt="Jain Cloth Centre Logo" />
            <div className="landing-logo-text-wrap">
              <span className="landing-brand-name">Jain Cloth Centre</span>
              <span className="landing-brand-sub">EST. 1970 • ILKAL</span>
            </div>
          </div>

          {/* Navigation Links - Stay within Landing Page */}
          <ul className="landing-nav-links">
            {/* <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('top')}>
                Home
              </button>
            </li> */}
            <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('collections')}>
                Collections
              </button>
            </li>
            <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('heritage')}>
                Ilkal Sarees
              </button>
            </li>
            <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('moments')}>
                Special Moments
              </button>
            </li>
            <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('generations')}>
                Family Style
              </button>
            </li>
            <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('bulk-orders')}>
                Bulk Orders
              </button>
            </li>
            {/* <li>
              <button className="landing-nav-link" onClick={() => scrollToSection('landing-store-section')}>
                Contact
              </button>
            </li> */}
          </ul>

          {/* Header Actions */}
          <div className="landing-nav-actions">
            {/* <button 
              className="landing-btn-icon" 
              onClick={() => setSearchModalOpen(true)}
              title="Search Collections"
            >
              <Search size={18} />
            </button> */}

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

            <button
              className="landing-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`landing-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="landing-mobile-drawer-inner">
          <ul className="landing-mobile-links">
            <li>
              <button onClick={() => scrollToSection('top')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('landing-category-section')}>Shop by Category</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('landing-heritage-section')}>Our 40-Year Heritage</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('collections')}>Curated Collections</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('heritage')}>Ilkal Heritage Sarees</button>
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
            <li>
              <button onClick={() => scrollToSection('destination-store')}>Destination Showroom</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('guarantee')}>Our Guarantee</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')}>Style Gallery</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('landing-store-section')}>Store Showroom & Map</button>
            </li>
          </ul>

          <div className="landing-mobile-drawer-footer">
            <button className="landing-btn-whatsapp-nav" onClick={handleWhatsApp} style={{ width: '100%', justifyContent: 'center' }}>
              <MessageCircle size={16} />
              <span>WhatsApp Concierge</span>
            </button>
            <button className="landing-btn-store-nav" onClick={() => scrollToSection('landing-store-section')} style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
              <MapPin size={16} />
              <span>Visit Ilkal Showroom</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;
