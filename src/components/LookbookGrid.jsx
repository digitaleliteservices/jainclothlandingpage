import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import { useUI } from '../context/UIContext';

const lookbookImages = [
  { id: 1, title: 'Red Silk Saree Tassels', image: '/assets/images/saree_detail_banner_1790677948638.jpg', desc: 'Handwoven red silk saree with traditional tassels.' },
  { id: 2, title: 'Velvet Bridal Lehenga', image: '/assets/images/cat_bridal_lehenga_1790677826632.jpg', desc: 'Bespoke crimson bridal lehenga in couture studio.' },
  { id: 3, title: 'Ivory Royal Kurta', image: '/assets/images/cat_menswear_1790677869067.jpg', desc: 'Embroidered silk kurta set for special celebrations.' },
  { id: 4, title: 'Family Festive Moments', image: '/assets/images/hero_family_1790677768538.jpg', desc: 'Traditional festive celebrations with loved ones.' },
  { id: 5, title: 'Silk Sarees Showcase', image: '/assets/images/cat_silk_saree_1790677798480.jpg', desc: 'Elegant pastel Kanjivaram silk saree drapes.' },
  { id: 6, title: 'Showroom Fabric Archive', image: '/assets/images/store_interior.jpg', desc: 'Handloom silk saree collection archive at store.' }
];

const LookbookGrid = () => {
  const { openQuickView } = useUI();

  return (
    <section className="section-padding lookbook-section">
      <div className="container">
        
        {/* Header with Split Title & Follow Button */}
        <div className="lookbook-header-grid">
          <div>
            <div className="lookbook-subtag">
              <Camera size={16} className="lookbook-camera-icon" />
              SOCIAL SHOWCASE
            </div>
            <h2 className="lookbook-title">
              Follow Our Latest Styles
            </h2>
          </div>

          <div className="lookbook-header-right">
            <a 
              href="https://www.instagram.com/jainclothcentre" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-follow-instagram"
            >
              FOLLOW @JAINCLOTHCENTRE
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* 6 Image Grid Row */}
        <div className="lookbook-grid-row">
          {lookbookImages.map((item) => (
            <div 
              key={item.id} 
              className="lookbook-card-item"
              onClick={() => openQuickView(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="lookbook-card-overlay">
                <Camera size={22} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LookbookGrid;

