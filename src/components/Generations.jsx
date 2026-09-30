import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const Generations = () => {
  const { openQuickView } = useUI();

  return (
    <section className="section-padding generations-section" id="generations">
      <div className="container">
        
        {/* Header */}
        <div className="text-center">
          <div className="generations-subtag">
            GENERATION TO GENERATION
          </div>
          <h2 className="section-title">Style for Every Generation</h2>
          <p className="section-subtitle">
            From everyday essentials to festive outfits, discover clothing for men, women, and kids under one esteemed roof.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="generations-cards-grid">
          
          {/* Card 1: Men's Wardrobe */}
          <div 
            className="gen-family-card" 
            onClick={() => openQuickView({
              title: "Men's Wardrobe",
              desc: "Fine silk kurtas, Modi sleeveless jackets, ceremonial silk dhotis, and crisp everyday linen white outfits for every family milestone.",
              image: "/assets/images/gen_grandfather_1790678097286.jpg"
            })}
          >
            <div className="gen-card-img-wrap">
              <img src="/assets/images/gen_grandfather_1790678097286.jpg" alt="Men's Wardrobe" />
            </div>
            <div className="gen-card-body">
              <span className="gen-card-tag">CRAFTED FOR DIGNITY</span>
              <h3 className="gen-card-title">Men's Wardrobe</h3>
              <p className="gen-card-desc">
                Fine silk kurtas, Modi sleeveless jackets, ceremonial silk dhotis, and crisp everyday linen white outfits for every family milestone.
              </p>
              <div className="gen-card-footer">
                SUITABLE FOR AGES: 16 — 80
              </div>
            </div>
          </div>

          {/* Card 2: Women's Couture */}
          <div 
            className="gen-family-card" 
            onClick={() => openQuickView({
              title: "Women's Couture",
              desc: "Handloom sarees, designer salwar sets, festive ready-to-wear drapes, and exquisite unstitched suit lengths.",
              image: "/assets/images/gen_mom_daughter.jpg"
            })}
          >
            <div className="gen-card-img-wrap">
              <img src="/assets/images/gen_mom_daughter.jpg" alt="Women's Couture" />
            </div>
            <div className="gen-card-body">
              <span className="gen-card-tag">ELEGANCE & GRACE</span>
              <h3 className="gen-card-title">Women's Couture</h3>
              <p className="gen-card-desc">
                Handloom sarees, designer salwar sets, festive ready-to-wear drapes, and exquisite unstitched suit lengths.
              </p>
              <div className="gen-card-footer">
                PURE SILK • TUSSAR • CHANDERI
              </div>
            </div>
          </div>

          {/* Card 3: Kids' Festive Line */}
          <div 
            className="gen-family-card" 
            onClick={() => openQuickView({
              title: "Kids' Festive Line",
              desc: "Soft pure silk lehengas, adorable mini kurtas, and hypoallergenic fabric blends specially curated for baby comfort and charm.",
              image: "/assets/images/gen_children_1790678192067.jpg"
            })}
          >
            <div className="gen-card-img-wrap">
              <img src="/assets/images/gen_children_1790678192067.jpg" alt="Kids' Festive Line" />
            </div>
            <div className="gen-card-body">
              <span className="gen-card-tag">DELIGHTFUL MOMENTS</span>
              <h3 className="gen-card-title">Kids' Festive Line</h3>
              <p className="gen-card-desc">
                Soft pure silk lehengas, adorable mini kurtas, and hypoallergenic fabric blends specially curated for baby comfort and charm.
              </p>
              <div className="gen-card-footer">
                INFANTS TO TEENS (AGES 0 — 16)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href="#collections" className="btn btn-hero-primary">
            EXPLORE FAMILY COLLECTIONS
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Generations;
