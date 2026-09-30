import React from 'react';
import { ArrowRight, CheckCircle2, Users, Globe, Sparkles, MessageCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';

const Hero = () => {
  const { navigateTo } = useUI();

  const openWhatsApp = () => {
    window.open("https://wa.me/919448100000?text=Hi%20Jain%20Cloth%20Centre,%20I%20would%20like%20to%20shop%20for%20ethnic%20wear", "_blank");
  };

  return (
    <section className="hero-section" id="home">
      {/* Decorative Ambient Glows */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-grid">
        
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-badge-tag">
            <span className="hero-diamond">◆</span>
            <span>TRADITION • STYLE • TOGETHERNESS</span>
            <span className="hero-diamond">◆</span>
          </div>
          
          <h1 className="hero-headline">
            Celebrate Every Occasion in Timeless Style.
          </h1>
          
          <p className="hero-lead">
            Discover beautiful Ilkal sarees, elegant bridal wear, and stylish collections for the entire family at Jain Cloth Centre. Handloom precision meets contemporary family celebration.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-hero-primary"
              onClick={() => navigateTo('collections')}
            >
              <span>EXPLORE COLLECTIONS</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-hero-whatsapp" onClick={openWhatsApp}>
              <MessageCircle size={17} className="whatsapp-icon-secondary" />
              <span>SHOP ON WHATSAPP</span>
            </button>
          </div>

          {/* 3 Heritage Trust Markers */}
          <div className="hero-bottom-badges">
            <div className="bottom-badge-card">
              <CheckCircle2 size={20} className="badge-icon" />
              <div>
                <strong>Direct from Weavers</strong>
                <span>GI-Tagged Ilkal Craft</span>
              </div>
            </div>

            <div className="bottom-badge-card">
              <Users size={20} className="badge-icon" />
              <div>
                <strong>10,000+ Families</strong>
                <span>Multi-generational Trust</span>
              </div>
            </div>

            <div className="bottom-badge-card">
              <Globe size={20} className="badge-icon" />
              <div>
                <strong>Worldwide Delivery</strong>
                <span>Global Diaspora Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Arch Frame */}
        <div className="hero-visual">
          <div className="hero-arch-container">
            <div className="hero-arch-frame">
              <img 
                src="/assets/images/hero_family_1790677768538.jpg" 
                alt="Indian family dressed in traditional festive attire" 
                className="hero-arch-img" 
              />
            </div>

            {/* Floating Heritage Badge */}
            <div className="floating-arch-card">
              <div className="arch-card-gold-icon">
                <Sparkles size={20} />
              </div>
              <div className="arch-card-text">
                <span className="arch-card-subtitle">ARTISANAL HERITAGE</span>
                <strong className="arch-card-title">Authentic Ilkal Saree & Zari Craftsmanship</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

