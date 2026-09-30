import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  const scrollToHeritage = () => {
    const el = document.getElementById('landing-heritage-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section-padding landing-brandstory-section" id="landing-story-section">
      <div className="landing-container">
        <div className="landing-brandstory-content">
          
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            OUR LEGACY & VALUES
            <span className="landing-dec-line"></span>
          </div>

          <h2 className="landing-section-headline">
            Tradition Woven Into Every Generation
          </h2>

          <p className="landing-brandstory-quote">
            "In the heart of Karnataka's historic handloom town of Ilkal, Jain Cloth Centre was founded upon a singular reverence: to preserve the living miracle of pit-loom weaving while dressing multi-generational families with timeless pride."
          </p>

          <button className="landing-btn-primary" onClick={scrollToHeritage}>
            <span>Discover Our Story</span>
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
