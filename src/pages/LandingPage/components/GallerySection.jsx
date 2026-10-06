import React, { useState, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, MessageCircle, MapPin, ZoomIn } from 'lucide-react';

// Dynamically load all 50+ photos from the assets/Gallery folder
const galleryModules = import.meta.glob('../../../assets/Gallery/*.{png,jpg,jpeg,PNG,JPG,webp}', { eager: true, import: 'default' });

const allGalleryImages = Object.entries(galleryModules).map(([path, src], index) => {
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");
  return {
    id: index + 1,
    img: src,
    name: fileName
  };
});

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const initialCount = 16;
  const visibleImages = showAll ? allGalleryImages : allGalleryImages.slice(0, initialCount);

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

  const handleWhatsAppInquire = (imageName) => {
    const text = encodeURIComponent(`Namaste Jain Cloth Centre, I would like to inquire about this outfit from your gallery: ${imageName || 'Showcase piece'}`);
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

        {/* Gallery Grid */}
        <div className="landing-gallery-grid">
          {visibleImages.map((item, idx) => (
            <div 
              key={item.id} 
              className="landing-gallery-item" 
              onClick={() => setLightboxIndex(idx)} 
              title="Click to view full photo"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(idx); }}
            >
              <img 
                src={item.img} 
                alt={`Jain Cloth Centre Gallery - ${item.name}`} 
                loading="lazy" 
              />
              <div className="landing-gallery-overlay">
                <div className="landing-gallery-overlay-badge">
                  <ZoomIn size={20} />
                  <span>View Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle View All / Show Less */}
        {allGalleryImages.length > initialCount && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button 
              className="landing-btn-secondary" 
              onClick={() => setShowAll(!showAll)}
              style={{ padding: '12px 32px', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px' }}
            >
              {showAll ? 'Show Less' : `View All Photos (${allGalleryImages.length})`}
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
                alt={`Jain Cloth Centre Showcase ${lightboxIndex + 1}`} 
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
                <span className="landing-gallery-lightbox-counter">
                  Photo {lightboxIndex + 1} of {visibleImages.length}
                </span>

                <button 
                  onClick={() => handleWhatsAppInquire(visibleImages[lightboxIndex].name)}
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
              onClick={() => handleWhatsAppInquire('Designs seen in showcase gallery')}
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
