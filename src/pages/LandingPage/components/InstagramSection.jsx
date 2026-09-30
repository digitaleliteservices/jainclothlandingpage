import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const instaImages = [
  { img: "/assets/images/lookbook_1.jpg", label: "#IlkalSarees" },
  { img: "/assets/images/lookbook_2.jpg", label: "#BridalLehenga" },
  { img: "/assets/images/lookbook_3.jpg", label: "#HeritageWeaves" },
  { img: "/assets/images/lookbook_4.jpg", label: "#MensSherwani" },
  { img: "/assets/images/lookbook_5.jpg", label: "#FestiveDrapes" },
  { img: "/assets/images/lookbook_6.jpg", label: "#JainClothCentre" }
];

const InstagramSection = () => {
  const openInsta = () => {
    window.open("https://www.instagram.com/jainclothcentre", "_blank");
  };

  return (
    <section className="landing-section-padding" style={{ backgroundColor: '#FAF5EB' }}>
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            STYLE GALLERY
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Follow Our Style
          </h2>
          <p className="landing-section-desc">
            Explore daily drape inspirations, customer stories, and behind-the-scenes handloom craftsmanship on Instagram.
          </p>
        </div>

        <div className="landing-insta-grid">
          {instaImages.map((item, idx) => (
            <div key={idx} className="landing-insta-item" onClick={openInsta} style={{ cursor: 'pointer' }}>
              <img src={item.img} alt={`Jain Cloth Style ${idx + 1}`} />
              <div className="landing-insta-overlay">
                <InstagramIcon size={28} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button className="landing-btn-secondary" onClick={openInsta}>
            <InstagramIcon size={16} />
            <span>Follow @jainclothcentre</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
