import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Ilkal Sarees",
    desc: "Authentic Chikki Paras & Topi Teni pallu handlooms crafted in Ilkal.",
    image: "/assets/images/spotlight_ilkal.jpg"
  },
  {
    title: "Bridal & Ethnic Wear",
    desc: "Regal lehengas, heavy silk drapes & wedding trousseau sets.",
    image: "/assets/images/cat_bridal_lehenga_1790677826632.jpg"
  },
  {
    title: "Women's Collection",
    desc: "Designer sarees, festive kurtis, and contemporary ethnic ensembles.",
    image: "/assets/images/cat_silk_saree_1790677798480.jpg"
  },
  {
    title: "Men's Collection",
    desc: "Royalty-inspired sherwanis, silk kurta sets & designer dhotis.",
    image: "/assets/images/cat_menswear_1790677869067.jpg"
  },
  {
    title: "Kids' Collection",
    desc: "Adorable Pattu Langa sets & traditional dhoti clothing for little ones.",
    image: "/assets/images/cat_kids_1790677909697.jpg"
  }
];

const CategorySection = () => {
  const scrollToFeatured = () => {
    const el = document.getElementById('landing-featured-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section-padding" id="landing-category-section">
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            DISCOVER OUR CATALOG
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Find Your Perfect Style
          </h2>
          <p className="landing-section-desc">
            Explore curated categories thoughtfully designed for celebrations, rituals, and timeless everyday elegance.
          </p>
        </div>

        <div className="landing-category-grid">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="landing-category-card"
              onClick={scrollToFeatured}
            >
              <div className="landing-category-img-wrap">
                <img src={cat.image} alt={cat.title} />
              </div>
              <div className="landing-category-content">
                <h3 className="landing-category-title">{cat.title}</h3>
                <p className="landing-category-desc">{cat.desc}</p>
                <div className="landing-category-cta">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
