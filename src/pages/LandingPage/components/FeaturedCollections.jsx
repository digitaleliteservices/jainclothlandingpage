import React from 'react';
import { useUI } from '../../../context/UIContext';
import { ArrowRight } from 'lucide-react';

const featuredItems = [
  {
    id: "f1",
    tag: "BRIDAL WEAR",
    title: "Velvet Bridal Lehenga & Zari Trousseau",
    desc: "Heavy embroidered bridal velvet ensemble crafted for grand wedding moments.",
    image: "/assets/images/prod_velvet_lehenga.jpg",
    price: "₹34,500",
    fabric: "Pure Velvet & Zari"
  },
  {
    id: "f2",
    tag: "MEN'S ETHNIC",
    title: "Royal Ivory Silk Sherwani Set",
    desc: "Tailored Mulberry silk sherwani with hand-embroidered royal motifs.",
    image: "/assets/images/prod_ivory_sherwani.jpg",
    price: "₹18,900",
    fabric: "Mulberry Silk"
  },
  {
    id: "f3",
    tag: "HERITAGE SILK",
    title: "Peacock Blue Ilkal Silk Saree",
    desc: "Classic Kasuti embroidery with traditional maroon Kondi border.",
    image: "/assets/images/prod_peacock_blue.jpg",
    price: "₹12,450",
    fabric: "Pure Ilkal Silk"
  },
  {
    id: "f4",
    tag: "KIDS' CELEBRATION",
    title: "Traditional Boys' Silk Dhoti Set",
    desc: "Comfortable and authentic pure silk festive attire for young boys.",
    image: "/assets/images/prod_boys_dhoti.jpg",
    price: "₹4,200",
    fabric: "Pure Art Silk"
  },
  {
    id: "f5",
    tag: "FESTIVE DRAPES",
    title: "Emerald Green Chanderi Silk Anarkali",
    desc: "Flowing festive silhouette with subtle gold tissue embroidery.",
    image: "/assets/images/prod_emerald_green.jpg",
    price: "₹9,800",
    fabric: "Chanderi Silk"
  },
  {
    id: "f6",
    tag: "TROUSSEAU SPECIAL",
    title: "Family Trousseau & Match Set",
    desc: "Coordinated wedding group drapes for brides, grooms, and relatives.",
    image: "/assets/images/prod_bulk_trousseau.jpg",
    price: "₹45,000",
    fabric: "Curated Set"
  }
];

const FeaturedCollections = () => {
  const { openQuickView } = useUI();

  const scrollToCategories = () => {
    const el = document.getElementById('landing-category-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section-padding" id="landing-featured-section">
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            CURATED SPOTLIGHT
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Curated for Every Occasion
          </h2>
          <p className="landing-section-desc">
            Explore signature ensembles selected by our master curators for weddings, festive ceremonies, and cherished family gatherings.
          </p>
        </div>

        <div className="landing-featured-grid">
          {featuredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="landing-featured-card"
              onClick={() => openQuickView(item)}
            >
              <div className="landing-featured-img-wrap">
                <img src={item.image} alt={item.title} />
                <span className="landing-featured-tag">{item.tag}</span>
              </div>
              <div className="landing-featured-body">
                <h3 className="landing-featured-title">{item.title}</h3>
                <p className="landing-featured-desc">{item.desc}</p>
                <button 
                  className="landing-category-cta" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span>Quick View</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="landing-btn-primary" onClick={scrollToCategories}>
            Explore All Categories
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollections;
