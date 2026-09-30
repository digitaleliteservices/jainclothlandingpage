import React, { useState } from 'react';
import { 
  ShieldCheck, Video, Sparkles, MessageCircle, Filter, 
  Eye, Heart, Sliders, ChevronLeft, ChevronRight, Handshake,
  Headphones, X, Grid, LayoutGrid, Award, Truck, PhoneCall, Tag,
  ChevronDown, Folder, User, Users, MapPin, CheckCircle2
} from 'lucide-react';
import { catalogProducts, categoryHierarchy } from '../data/collectionsData';
import { useUI } from '../context/UIContext';

const filterTabs = [
  { key: 'all', label: 'All Clothing (160)' },
  { key: 'Men', label: "Men's Wear (44)" },
  { key: 'Women', label: "Women's Wear (58)" },
  { key: 'Kids', label: "Kids' Wear (28)" },
  { key: 'Collections', label: 'Curated Collections (30)' }
];

const colorPalette = [
  { name: 'Maroon / Crimson', hex: '#6B1F2A' },
  { name: 'Peacock Blue', hex: '#1A365D' },
  { name: 'Forest Green', hex: '#1C4532' },
  { name: 'Mustard Gold', hex: '#B89452' },
  { name: 'Classic Ivory', hex: '#FAF7F2' },
  { name: 'Rani Pink', hex: '#9E1B4C' }
];

const occasions = [
  'WEDDING NUPTIALS',
  'FESTIVE PUJA',
  'SANGEET',
  'TEMPLE RITUALS',
  'RECEPTION',
  'EVERYDAY GRACE'
];

const CollectionsPage = () => {
  const { navigateTo, openQuickView, setBulkModalOpen } = useUI();
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState([]);
  
  // Accordion open/close state for Category Tree
  const [expandedTree, setExpandedTree] = useState({
    Men: true,
    Women: true,
    Kids: true,
    Collections: true
  });

  const toggleTreeNode = (node) => {
    setExpandedTree(prev => ({ ...prev, [node]: !prev[node] }));
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const openWhatsAppInquiry = (productName) => {
    const text = encodeURIComponent(`Namaste Jain Cloth Centre, I am interested in inquiring about "${productName}".`);
    window.open(`https://wa.me/919448100000?text=${text}`, '_blank');
  };

  const openWhatsAppConsultation = () => {
    const text = encodeURIComponent(`Namaste Jain Cloth Centre, I would like to book a WhatsApp video draping session for Ilkal sarees.`);
    window.open(`https://wa.me/919448100000?text=${text}`, '_blank');
  };

  // Filter products based on selected Department & Subcategory
  let displayedProducts = catalogProducts;

  if (selectedDept !== 'all') {
    displayedProducts = displayedProducts.filter(p => p.department === selectedDept);
  }

  if (selectedSubCat !== 'all') {
    displayedProducts = displayedProducts.filter(p => 
      p.subCategory === selectedSubCat || 
      p.ethnicSub === selectedSubCat || 
      p.kidSection === selectedSubCat || 
      p.collectionTag === selectedSubCat
    );
  }

  if (selectedColor) {
    displayedProducts = displayedProducts.filter(p => p.color === selectedColor);
  }

  if (selectedOccasion) {
    displayedProducts = displayedProducts.filter(p => p.occasion.toUpperCase() === selectedOccasion);
  }

  const resetAllFilters = () => {
    setSelectedDept('all');
    setSelectedSubCat('all');
    setSelectedColor(null);
    setSelectedOccasion(null);
  };

  return (
    <div className="collections-page-wrapper">
      
      {/* Top Heritage Breadcrumb & Sub-Bar */}
      <section className="collections-top-subbar">
        <div className="container subbar-container">
          <div className="breadcrumb-nav">
            <button onClick={() => navigateTo('home')} className="breadcrumb-link">Home</button>
            <span className="sep">/</span>
            <span className="active">Collections</span>
          </div>
          <div className="trust-pills-right">
            <span className="trust-pill">
              <ShieldCheck size={15} />
              AUTHENTIC GI REGISTERED (GOVT. OF INDIA)
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Catalog Header Section */}
      <section className="catalog-hero-header">
        <div className="container">
          <div className="catalog-header-flex">
            <div className="catalog-header-text">
              <div className="collections-subtag">
                <span className="line-dec"></span>
                AUTHENTIC WEAVES & FAMILY ATTIRE
              </div>
              <h1 className="catalog-main-headline">
                Our Curated Collections
              </h1>
              <p className="catalog-main-lead">
                Handpicked Ilkal sarees, heirloom bridal trousseau, regal men's ethnic couture, and charming festive ensembles for children — woven with generational pride in Ilkal, Karnataka.
              </p>
            </div>

            {/* Quick Stats & Weaver Assurance Badge */}
            <div className="gi-certificate-card shadow-sm">
              <div className="badge-burgundy-icon">
                <Award size={22} />
              </div>
              <div>
                <strong className="badge-code">GI Certificate No. 43</strong>
                <span className="badge-sub">Guaranteed Original Topi Teni Pallu</span>
              </div>
            </div>
          </div>

          {/* Quick Department Nav tabs */}
          <div className="category-pills-bar">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                className={`pill-tab-btn ${selectedDept === tab.key ? 'active' : ''}`}
                onClick={() => {
                  setSelectedDept(tab.key);
                  setSelectedSubCat('all');
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Spotlight Banner: The GI Tagged Ilkal Handloom Showcase */}
      <section className="container section-margin-sm">
        <div className="spotlight-banner-card">
          <div className="spotlight-grid">
            <div className="spotlight-img-col">
              <img 
                src="/assets/images/spotlight_ilkal.jpg" 
                alt="Close-up of an authentic maroon and gold Ilkal silk saree" 
                className="spotlight-img"
              />
              <div className="spotlight-provenance-tag">
                PROVENANCE: ILKAL, BAGALKOT DIST.
              </div>
            </div>

            <div className="spotlight-content-col">
              <div className="spotlight-curation-tag">
                <span className="gold-dot"></span>
                SPECIAL EDITION CURATION
              </div>

              <h2 className="spotlight-headline">
                The GI-Tagged Ilkal Handloom Showcase
              </h2>

              <p className="spotlight-desc">
                Distinguished by its legendary <strong className="highlight">Topi Teni</strong> (chariot temple motif) pallu woven through the historic Kondi interlocking warp technique. Each drape represents up to 14 days of rhythmic pit-loom dedication by master weavers in North Karnataka.
              </p>

              <div className="weave-specs-grid">
                <div className="spec-card">
                  <span className="spec-label">WARP & WEFT</span>
                  <strong className="spec-val">Pure Mulberry Silk</strong>
                </div>
                <div className="spec-card">
                  <span className="spec-label">BORDER STYLE</span>
                  <strong className="spec-val">Chikki Paras Zari</strong>
                </div>
                <div className="spec-card">
                  <span className="spec-label">PALLU TECHNIQUE</span>
                  <strong className="spec-val">Kondi Interlock</strong>
                </div>
              </div>

              <div className="spotlight-actions">
                <button className="btn btn-gold-cta" onClick={() => openWhatsAppInquiry('GI-Tagged Ilkal Handloom Showcase')}>
                  <MessageCircle size={16} />
                  INQUIRE VIA WHATSAPP
                </button>
                <button className="btn btn-outline-light" onClick={() => { setSelectedDept('Women'); setSelectedSubCat('Sarees'); }}>
                  <Grid size={16} />
                  VIEW 24 EXCLUSIVE DRAPES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Workspace: Filter Sidebar + Product Grid */}
      <section className="container section-margin-bottom">
        
        {/* Utility Filter & Summary Bar */}
        <div className="catalog-utility-bar">
          <div className="utility-left">
            <button 
              className="btn btn-mobile-filter lg-hidden"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <Sliders size={16} />
              FILTER CATALOG
            </button>

            <div className="showing-count-box">
              <strong>Showing {displayedProducts.length} Handcrafted Items</strong>
              <span className="show-sub">(Direct Showroom Stock)</span>
            </div>
          </div>

          <div className="utility-middle">
            {selectedDept !== 'all' && (
              <span className="active-tag-pill">
                Dept: {selectedDept} <X size={12} className="close-pill-icon" onClick={() => setSelectedDept('all')} />
              </span>
            )}
            {selectedSubCat !== 'all' && (
              <span className="active-tag-pill">
                Cat: {selectedSubCat} <X size={12} className="close-pill-icon" onClick={() => setSelectedSubCat('all')} />
              </span>
            )}
            {selectedColor && (
              <span className="active-tag-pill">
                Color: {selectedColor} <X size={12} className="close-pill-icon" onClick={() => setSelectedColor(null)} />
              </span>
            )}
            {(selectedDept !== 'all' || selectedSubCat !== 'all' || selectedColor || selectedOccasion) && (
              <button className="clear-all-link" onClick={resetAllFilters}>
                CLEAR ALL
              </button>
            )}
          </div>

          <div className="utility-right">
            <div className="sort-select-box">
              <label htmlFor="sortSelector">SORT BY:</label>
              <select 
                id="sortSelector" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured Weaves</option>
                <option value="new">New Arrivals (Ashada & Diwali)</option>
                <option value="traditional">Traditional Favorites</option>
                <option value="silk">Pure Silk Heavy Pallu</option>
              </select>
            </div>

            <div className="view-mode-toggles">
              <button className="view-toggle-btn active" title="3-Column Grid">
                <Grid size={16} />
              </button>
              <button className="view-toggle-btn" title="4-Column Grid">
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 12-Column Main Workspace */}
        <div className="catalog-workspace-grid">
          
          {/* Left Filter Sidebar with Hierarchical Category Tree */}
          <aside className={`catalog-sidebar ${mobileFilterOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
              <h3>
                <Sliders size={18} className="icon-gold" />
                Refine Weaves
              </h3>
              <button className="reset-btn" onClick={resetAllFilters}>
                RESET
              </button>
            </div>

            {/* Hierarchical Category Tree (Men, Women, Kids, Collections) */}
            <div className="filter-group">
              <h4 className="filter-title">Clothing Categories</h4>
              <div className="tree-category-list">
                
                {/* 👨 MEN */}
                <div className="tree-dept-node">
                  <div className="tree-dept-header" onClick={() => toggleTreeNode('Men')}>
                    <span className="dept-label-wrap">
                      {expandedTree.Men ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      <strong>Men</strong>
                    </span>
                    <span className="count-tag">44</span>
                  </div>
                  {expandedTree.Men && (
                    <div className="tree-sub-list">
                      {categoryHierarchy.Men.subcategories.map(sub => (
                        <button
                          key={sub}
                          className={`tree-sub-btn ${selectedDept === 'Men' && selectedSubCat === sub ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDept('Men');
                            setSelectedSubCat(sub === 'All Men' ? 'all' : sub);
                          }}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 👩 WOMEN */}
                <div className="tree-dept-node">
                  <div className="tree-dept-header" onClick={() => toggleTreeNode('Women')}>
                    <span className="dept-label-wrap">
                      {expandedTree.Women ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      <strong>Women</strong>
                    </span>
                    <span className="count-tag">58</span>
                  </div>
                  {expandedTree.Women && (
                    <div className="tree-sub-list">
                      {categoryHierarchy.Women.subcategories.map(sub => (
                        <button
                          key={sub}
                          className={`tree-sub-btn ${selectedDept === 'Women' && selectedSubCat === sub ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDept('Women');
                            setSelectedSubCat(sub === 'All Women' ? 'all' : sub);
                          }}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 👦👧 KIDS */}
                <div className="tree-dept-node">
                  <div className="tree-dept-header" onClick={() => toggleTreeNode('Kids')}>
                    <span className="dept-label-wrap">
                      {expandedTree.Kids ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      <strong>Kids</strong>
                    </span>
                    <span className="count-tag">28</span>
                  </div>
                  {expandedTree.Kids && (
                    <div className="tree-sub-list">
                      <div className="tree-group-label">Boys</div>
                      {categoryHierarchy.Kids.boysSub.map(sub => (
                        <button
                          key={`boys-${sub}`}
                          className={`tree-sub-btn ${selectedDept === 'Kids' && selectedSubCat === sub ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDept('Kids');
                            setSelectedSubCat(sub);
                          }}
                        >
                          {sub}
                        </button>
                      ))}

                      <div className="tree-group-label" style={{ marginTop: '8px' }}>Girls</div>
                      {categoryHierarchy.Kids.girlsSub.map(sub => (
                        <button
                          key={`girls-${sub}`}
                          className={`tree-sub-btn ${selectedDept === 'Kids' && selectedSubCat === sub ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDept('Kids');
                            setSelectedSubCat(sub);
                          }}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ⭐ COLLECTIONS */}
                <div className="tree-dept-node">
                  <div className="tree-dept-header" onClick={() => toggleTreeNode('Collections')}>
                    <span className="dept-label-wrap">
                      {expandedTree.Collections ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      <strong>Collections</strong>
                    </span>
                    <span className="count-tag">30</span>
                  </div>
                  {expandedTree.Collections && (
                    <div className="tree-sub-list">
                      {categoryHierarchy.Collections.subcategories.map(sub => (
                        <button
                          key={sub}
                          className={`tree-sub-btn ${selectedDept === 'Collections' && selectedSubCat === sub ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDept('Collections');
                            setSelectedSubCat(sub === 'All Collections' ? 'all' : sub);
                          }}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Weave & Fabric */}
            <div className="filter-group">
              <h4 className="filter-title">Weave & Fabric</h4>
              <div className="filter-options-list">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Pure Silk Ilkal (Kondi Warp)</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Silk-Cotton Handloom</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Chanderi & Organza</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Micro Velvet & Zari</span>
                </label>
              </div>
            </div>

            {/* Occasion Filter Pills */}
            <div className="filter-group">
              <h4 className="filter-title">Occasion</h4>
              <div className="occasion-pills-list">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    className={`occasion-pill-btn ${selectedOccasion === occ ? 'active' : ''}`}
                    onClick={() => setSelectedOccasion(selectedOccasion === occ ? null : occ)}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Heritage */}
            <div className="filter-group">
              <h4 className="filter-title">Border Heritage</h4>
              <div className="filter-options-list">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Chikki Paras Border</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Gomi Border</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Gayatri Border</span>
                </label>
              </div>
            </div>

            {/* Color Palette Filter */}
            <div className="filter-group">
              <h4 className="filter-title">Color Palette</h4>
              <div className="color-swatch-grid">
                {colorPalette.map(c => (
                  <button
                    key={c.name}
                    className={`color-circle-btn ${selectedColor === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    onClick={() => setSelectedColor(selectedColor === c.name ? null : c.name)}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Cards Grid (3 Columns) */}
          <main className="catalog-products-column">
            <div className="product-catalog-grid">
              {displayedProducts.map((product) => (
                <article key={product.id} className="product-card-item">
                  <div className="product-img-wrap">
                    <span className="product-badge-tag">{product.tag}</span>
                    
                    <button 
                      className={`product-wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                      title="Add to Wishlist"
                    >
                      <Heart size={16} fill={wishlist.includes(product.id) ? "#7A0C2E" : "none"} />
                    </button>

                    <img src={product.image} alt={product.title} className="product-img" />
                    
                    <button className="product-quick-btn" onClick={() => openQuickView(product)} title="Quick View">
                      <Eye size={18} />
                    </button>
                  </div>

                  <div className="product-card-body">
                    <div className="product-card-header">
                      <span className="product-specs">{product.specs}</span>
                      <span className="product-badge-sub">{product.badge}</span>
                    </div>

                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-desc">{product.desc}</p>

                    <div className="product-meta-pill">
                      <span className="meta-ready">Ready in Showroom</span>
                      <span className="meta-sub">{product.subtext}</span>
                    </div>

                    <div className="product-card-actions-single">
                      <button className="btn btn-inquire-full" onClick={() => openWhatsAppInquiry(product.title)}>
                        <MessageCircle size={15} />
                        INQUIRE PRICE
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="catalog-pagination-bar">
              <p className="pagination-text">
                Displaying <strong>1 to {displayedProducts.length}</strong> of <strong>48</strong> verified handlooms in stock
              </p>

              <div className="pagination-btns">
                <button className="page-nav-btn" disabled><ChevronLeft size={16} /></button>
                <button className="page-num-btn active">1</button>
                <button className="page-num-btn">2</button>
                <button className="page-num-btn">3</button>
                <button className="page-nav-btn"><ChevronRight size={16} /></button>
              </div>
            </div>
          </main>

        </div>

        {/* Bespoke Wedding & Bulk Sourcing Banner */}
        <div className="bulk-sourcing-banner">
          <div className="banner-grid-split">
            <div className="banner-content">
              <div className="banner-tag">
                <MapPin size={14} />
                BESPOKE WEDDING & EVENT SOURCING
              </div>

              <h2 className="banner-title">
                Planning a Wedding or Traditional Puja?
              </h2>

              <p className="banner-lead">
                Looking for 10 or more matching Ilkal handloom sarees for your family bridal party, sangeet group, or temple choir? Connect directly with our master drapers in Ilkal for customized colorways, personalized blouse fabrics, and insured global delivery.
              </p>

              <div className="banner-actions">
                <button className="btn btn-burgundy-cta" onClick={() => setBulkModalOpen(true)}>
                  <MessageCircle size={15} />
                  CONNECT ON WHATSAPP (+91 9448100000)
                </button>
              </div>
            </div>

            {/* 4 Feature Mini Cards (2x2 Grid) */}
            <div className="banner-feature-grid">
              <div className="banner-feature-card">
                <strong className="feature-stat">45+</strong>
                <span className="feature-lbl">Years of Heritage in Ilkal</span>
              </div>
              <div className="banner-feature-card">
                <strong className="feature-stat">100%</strong>
                <span className="feature-lbl">GI-Tagged Authenticity</span>
              </div>
              <div className="banner-feature-card">
                <strong className="feature-stat">2,500+</strong>
                <span className="feature-lbl">Bridal Trousseaus Crafted</span>
              </div>
              <div className="banner-feature-card">
                <strong className="feature-stat">24hr</strong>
                <span className="feature-lbl">Loom Video Consultation</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4 Trust Value Props Strip before Footer */}
      <section className="collections-trust-strip">
        <div className="container trust-strip-grid">
          <div className="trust-strip-card">
            <div className="trust-card-burgundy-icon">
              <CheckCircle2 size={20} color="#FFFFFF" />
            </div>
            <div className="trust-card-text">
              <strong>100% Authentic Handloom</strong>
              <p>Government GI Tag certified Kondi interlocked drapes.</p>
            </div>
          </div>

          <div className="trust-strip-card">
            <div className="trust-card-burgundy-icon">
              <Tag size={20} color="#FFFFFF" />
            </div>
            <div className="trust-card-text">
              <strong>Direct Loom Pricing</strong>
              <p>Zero middleman markup, empowering master weavers directly.</p>
            </div>
          </div>

          <div className="trust-strip-card">
            <div className="trust-card-burgundy-icon">
              <Video size={20} color="#FFFFFF" />
            </div>
            <div className="trust-card-text">
              <strong>Virtual Showroom Calls</strong>
              <p>High-definition drape demonstrations for global families.</p>
            </div>
          </div>

          <div className="trust-strip-card">
            <div className="trust-card-burgundy-icon">
              <Truck size={20} color="#FFFFFF" />
            </div>
            <div className="trust-card-text">
              <strong>Worldwide Insured Dispatch</strong>
              <p>Safe transit to USA, UK, Gulf, Singapore, and pan-India.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CollectionsPage;
