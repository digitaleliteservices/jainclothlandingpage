import React from 'react';
import { categoriesData } from '../data/collectionsData';

const CollectionsGrid = () => {
  return (
    <section className="section-padding collections-section" id="collections">
      <div className="container">
        
        {/* Section Header with Split Layout */}
        <div className="collections-header-grid">
          <div>
            <div className="collections-subtag">
              — CURATED COLLECTIONS
            </div>
            <h2 className="collections-title">
              Find Your Perfect Style
            </h2>
          </div>
          <div className="collections-header-right">
            <p>
              Explore collections thoughtfully curated for every member of the family, from sacred rituals to high-fashion bridal moments.
            </p>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="categories-grid">
          {categoriesData.map((item) => (
            <div 
              key={item.id} 
              className="category-card" 
              onClick={() => window.open(`https://api.whatsapp.com/send/?phone=919353977262&text=${encodeURIComponent(`Namaste Jain Cloth Centre, I would like to explore your ${item.title}.`)}&type=phone_number&app_absent=0`, '_blank')}
            >
              <div className="category-img-wrap">
                <span className="category-dark-tag">{item.tag}</span>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="category-img" 
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                />
              </div>
              <div className="category-content">
                <h3 className="category-title">{item.title}</h3>
                <p className="category-desc">{item.desc}</p>
                {/* <span className="category-explore-link">
                  EXPLORE COLLECTION
                  <ArrowRight size={14} />
                </span> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionsGrid;
