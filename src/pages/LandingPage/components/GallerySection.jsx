import React, { useState, useEffect, useMemo } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, MessageCircle, MapPin, ZoomIn } from 'lucide-react';

// Dynamically load all photos from the assets/Gallery subfolders
const galleryModules = import.meta.glob('../../../assets/Gallery/**/*.{png,jpg,jpeg,PNG,JPG,webp}', { eager: true, import: 'default' });

const allGalleryImages = Object.entries(galleryModules).map(([path, src], index) => {
  const parts = path.split(/[\/\\]/);
  const fileNameWithExt = parts[parts.length - 1];
  const fileName = fileNameWithExt.replace(/\.[^/.]+$/, "");
  const folder = parts[parts.length - 2];
  let category = (folder && folder !== 'Gallery') ? folder : 'Showcase';
  if (category === 'Ilkal Sarees') {
    category = 'Sarees';
  }

  return {
    id: index + 1,
    img: src,
    name: fileName,
    category
  };
});

// Category display order
const PREFERRED_CATEGORIES = [
  'All',
  'Sarees',
  'Bridal & Ethnic Wear',
  'Women\'s Collection',
  'Men\'s Collection',
  'Kids\' Collection',
  'Family & Festive Wear'
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Compute count of photos for each category
  const categoryCounts = useMemo(() => {
    return allGalleryImages.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, { All: allGalleryImages.length });
  }, []);

  // Ordered categories list
  const categories = useMemo(() => {
    const presentInOrder = PREFERRED_CATEGORIES.filter(
      (cat) => cat === 'All' || (categoryCounts[cat] && categoryCounts[cat] > 0)
    );
    const extras = Object.keys(categoryCounts).filter(
      (cat) => !PREFERRED_CATEGORIES.includes(cat)
    );
    return [...presentInOrder, ...extras];
  }, [categoryCounts]);

  // Filter images by selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return allGalleryImages;
    return allGalleryImages.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const initialCount = 16;
  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, initialCount);

  // When changing category, reset showAll and lightbox
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
    setLightboxIndex(null);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : visibleImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < visibleImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visibleImages.length]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : visibleImages.length - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < visibleImages.length - 1 ? prev + 1 : 0));
  };

  const handleWhatsAppInquire = (item) => {
    const name = typeof item === 'object' ? item.name : item;
    const cat = typeof item === 'object' ? item.category : selectedCategory;
    const text = encodeURIComponent(
      `Namaste Jain Cloth Centre, I would like to inquire about this outfit from your ${cat !== 'All' ? cat : 'Showcase'} gallery: ${name || 'Showcase piece'}`
    );
    window.open(`https://wa.me/919353977262?text=${text}`, '_blank');
  };

  const scrollToStore = () => {
    const elem = document.getElementById('landing-store-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="landing-section-padding landing-gallery-section" id="gallery">
      <div className="landing-container">
        
        {/* Section Header */}
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            OUR SHOWCASE GALLERY
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Explore Our Gallery
          </h2>
          <p className="landing-section-desc">
            A celebration of authentic handloom weaves, festive family attire, children’s fashion, and real celebration moments from our Ilkal showroom.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="landing-gallery-categories" role="tablist" aria-label="Gallery categories">
          {categories.map((category) => {
            const count = categoryCounts[category] || 0;
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                className={`landing-gallery-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                <span>{category}</span>
                <span className="landing-gallery-cat-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="landing-gallery-grid">
          {visibleImages.map((item, idx) => (
            <div 
              key={item.id} 
              className="landing-gallery-item" 
              onClick={() => setLightboxIndex(idx)} 
              title={`View ${item.category} photo`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(idx); }}
            >
              <img 
                src={item.img} 
                alt={`Jain Cloth Centre - ${item.category} - ${item.name}`} 
                loading="lazy" 
              />
              <span className="landing-gallery-item-cat">
                {item.category}
              </span>
              <div className="landing-gallery-overlay">
                <div className="landing-gallery-overlay-badge">
                  <ZoomIn size={18} />
                  <span>View Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle View All / Show Less */}
        {filteredImages.length > initialCount && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button 
              className="landing-btn-secondary" 
              onClick={() => setShowAll(!showAll)}
              style={{ padding: '12px 32px', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px' }}
            >
              {showAll 
                ? 'Show Less' 
                : `View All ${selectedCategory === 'All' ? '' : selectedCategory + ' '}Photos (${filteredImages.length})`
              }
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && visibleImages[lightboxIndex] && (
          <div className="landing-gallery-lightbox" onClick={() => setLightboxIndex(null)}>
            <div className="landing-gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="landing-gallery-lightbox-close" 
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo view"
                title="Close (Esc)"
              >
                <X size={22} />
              </button>

              <button 
                className="landing-gallery-lightbox-prev" 
                onClick={handlePrev}
                aria-label="Previous photo"
                title="Previous photo (Left Arrow)"
              >
                <ChevronLeft size={28} />
              </button>

              <img 
                src={visibleImages[lightboxIndex].img} 
                alt={`Jain Cloth Centre ${visibleImages[lightboxIndex].category} ${lightboxIndex + 1}`} 
                className="landing-gallery-lightbox-img" 
              />

              <button 
                className="landing-gallery-lightbox-next" 
                onClick={handleNext}
                aria-label="Next photo"
                title="Next photo (Right Arrow)"
              >
                <ChevronRight size={28} />
              </button>

              {/* Lightbox Footer Bar */}
              <div className="landing-gallery-lightbox-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="landing-gallery-lightbox-cat">
                    {visibleImages[lightboxIndex].category}
                  </span>
                  <span className="landing-gallery-lightbox-counter">
                    Photo {lightboxIndex + 1} of {visibleImages.length}
                  </span>
                </div>

                <button 
                  onClick={() => handleWhatsAppInquire(visibleImages[lightboxIndex])}
                  className="landing-btn-whatsapp-nav"
                  style={{ padding: '9px 18px', fontSize: '0.85rem' }}
                >
                  <MessageCircle size={16} />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Inquiry CTA Banner */}
        <div className="landing-gallery-inquiry-box">
          <div className="landing-gallery-inquiry-text">
            <h3>Loved a Design in Our Gallery?</h3>
            <p>Connect with our showroom stylists directly on WhatsApp for fabric details, pricing, video calls, or bespoke family sizing.</p>
          </div>
          <div className="landing-gallery-inquiry-actions">
            <button 
              className="landing-btn-whatsapp-nav"
              onClick={() => handleWhatsAppInquire(`Designs seen in ${selectedCategory} gallery`)}
            >
              <MessageCircle size={18} />
              <span>Inquire on WhatsApp (+91 93539 77262)</span>
            </button>
            <button 
              className="landing-btn-store-nav"
              onClick={scrollToStore}
            >
              <MapPin size={18} />
              <span>Visit Ilkal Showroom</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
