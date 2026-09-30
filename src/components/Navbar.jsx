import React, { useState, useEffect } from 'react';
import { Camera, User, Menu, X } from 'lucide-react';
import { useUI } from '../context/UIContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { currentPage, navigateTo, setAppointmentModalOpen, setSearchModalOpen } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, page, targetId = null) => {
    e.preventDefault();
    navigateTo(page);
    setMobileDrawerOpen(false);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-container">
          
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, 'home')}>
            <img src="/assets/images/logo.png" alt="Jain Cloth Centre Icon" className="brand-logo-img" />
            <span className="brand-title-serif">Jain Cloth Centre</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <a 
                  href="#home" 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#collections" 
                  className={`nav-link ${currentPage === 'collections' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'collections')}
                >
                  Collections
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            
            <button className="btn-contact-us" onClick={() => setAppointmentModalOpen(true)}>
              CONTACT US
            </button>

            <button className="user-profile-btn" onClick={() => setAppointmentModalOpen(true)} title="Account / Booking">
              <User size={18} />
            </button>

            <button className="icon-btn hamburger-menu" onClick={() => setMobileDrawerOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-drawer ${mobileDrawerOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img src="/assets/images/logo.png" alt="Jain Cloth Centre" style={{ height: '32px' }} />
            <span className="brand-title-serif" style={{ fontSize: '1.1rem' }}>Jain Cloth Centre</span>
          </div>
          <button className="icon-btn" onClick={() => setMobileDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#collections" 
              className={`nav-link ${currentPage === 'collections' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick(e, 'collections')}
            >
              Collections
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About Us
            </a>
          </li>
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn-contact-us" style={{ width: '100%', textAlign: 'center' }} onClick={() => { setMobileDrawerOpen(false); setAppointmentModalOpen(true); }}>
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
