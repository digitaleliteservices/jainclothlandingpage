import React from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, Award, Users, Globe, 
  Handshake, MapPin, Clock, Phone, MessageCircle, Edit3
} from 'lucide-react';
import { useUI } from '../context/UIContext';

const AboutPage = () => {
  const { navigateTo, setAppointmentModalOpen } = useUI();

  const openWhatsApp = () => {
    window.open("https://wa.me/919353977262?text=Namaste%20Jain%20Cloth%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20handloom%20heritage.", "_blank");
  };

  return (
    <div className="about-page-wrapper">
      
      {/* Top Heritage Breadcrumb & Sub-Bar */}
      <section className="collections-top-subbar">
        <div className="container subbar-container">
          <div className="breadcrumb-nav">
            <button onClick={() => navigateTo('landing')} className="breadcrumb-link">Home</button>
            <span className="sep">/</span>
            <span className="active">About Us</span>
          </div>
          <div className="trust-pills-right">
            <span className="trust-pill">
              <ShieldCheck size={15} />
              GI REGISTRATION NO. 43 CERTIFIED HERITAGE
            </span>
          </div>
        </div>
      </section>

      {/* Hero Story Banner */}
      <section className="about-hero-section">
        <div className="container about-hero-grid">
          
          {/* Left Text Content */}
          <div className="about-hero-content">
            <div className="about-badge-tag">
              ESTABLISHED 1970 • ILKAL, BAGALKOT DISTRICT
            </div>

            <h1 className="about-main-headline">
              Generations of Handloom Artistry & Family Grace
            </h1>

            <p className="about-main-lead">
              In the heart of North Karnataka's historic handloom town of Ilkal, Jain Cloth Centre was founded upon a singular reverence: to preserve the living miracle of Kondi pit-loom weaving while dressing multi-generational families with timeless pride. What began as a modest weaver sanctuary in 1970 on Main Bazar Road has grown into a revered textile destination trusted by connoisseurs across India and the global diaspora.
            </p>

            <div className="about-hero-buttons">
              <button className="btn btn-burgundy-cta" onClick={() => navigateTo('collections')}>
                <span>EXPLORE WEAVE ARCHIVE</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-hero-whatsapp" onClick={() => setAppointmentModalOpen(true)}>
                <span>PLAN SHOWROOM VISIT</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="about-hero-visual">
            <div className="about-img-card">
              <img 
                src="/assets/images/saree_detail_banner_1790677948638.jpg" 
                alt="Master weaver weaving pure mulberry silk Kondi warp saree at pit-loom" 
                className="about-hero-img"
              />
              <div className="about-provenance-tag">
                PIT-LOOM SANCTUARY: Pure Mulberry Silk × Kondi Warp Only
              </div>

              {/* Floating Heritage Badge */}
              <div className="about-floating-card">
                <div className="arch-card-gold-icon">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="arch-card-subtitle">HONORED LOOM HERITAGE</span>
                  <strong className="arch-card-title">Preserving the 8th-century Chalukyan weaving tradition with zero-blend compromise.</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Key Metric Heritage Assurance Cards Bar */}
      <section className="about-metrics-bar">
        <div className="container metrics-grid">
          <div className="metric-card">
            <strong className="metric-number">45+ <span className="metric-unit">yrs</span></strong>
            <strong className="metric-title">Continuous Heritage</strong>
            <p className="metric-desc">Archival master weave house since 1970 without disruption.</p>
          </div>

          <div className="metric-card">
            <strong className="metric-number">500+ <span className="metric-unit">guilds</span></strong>
            <strong className="metric-title">Artisan Families</strong>
            <p className="metric-desc">Direct handloom families sustaining pit-loom generations.</p>
          </div>

          <div className="metric-card">
            <strong className="metric-number">#43 <Award size={18} className="metric-badge-icon" /></strong>
            <strong className="metric-title">GI Tagged Safeguard</strong>
            <p className="metric-desc">Government-certified authentic Bagalkot Kondi interlock.</p>
          </div>

          <div className="metric-card">
            <strong className="metric-number">3rd <span className="metric-unit">Gen</span></strong>
            <strong className="metric-title">Master Curators</strong>
            <p className="metric-desc">Bridging traditional pit-looms to international couture.</p>
          </div>
        </div>
      </section>

      {/* Master Artisans: The Living Hands Behind Every Yard */}
      <section className="section-padding master-artisans-section">
        <div className="container">
          
          <div className="artisans-header-flex">
            <div>
              <div className="collections-subtag">
                <span className="line-dec"></span>
                MASTER ARTISANS & LOOM WEAVERS
              </div>
              <h2 className="section-title">
                The Living Hands Behind Every Yard
              </h2>
              <p className="section-subtitle">
                Meet the senior masters whose rhythm, intuition, and pride drive enduring soul to each warp woven in Bagalkot.
              </p>
            </div>

            <div className="trust-pill-tag">
              100% WEAVER TRUST & DIGNITY PLEDGE
            </div>
          </div>

          {/* Master Artisans Workspace (Main Left Card + Stacked Right Cards) */}
          <div className="artisans-workspace-grid">
            
            {/* Main Lead Master Card */}
            <div className="artisan-lead-card">
              <div className="artisan-img-wrap">
                <img 
                  src="/assets/images/gen_grandfather_1790678097286.jpg" 
                  alt="Shri Basavaraj & Guild Master Weaver" 
                  className="artisan-img"
                />
                <div className="artisan-overlay-tag">
                  <span>LEAD WEAVING & ARCHIVE MASTER</span>
                  <strong>Shri Basavaraj & Guild <Edit3 size={14} /></strong>
                </div>
              </div>

              <div className="artisan-card-body">
                <p className="artisan-bio">
                  Senior custodian of the intricate 8-pedal Kondi interlock. Shri Basavaraj has trained two generations of younger pit-loom apprentices in Ilkal, defending the vanishing hand-spun loom technique against commercial powerloom mimicry.
                </p>

                <div className="artisan-specs-grid">
                  <div className="artisan-spec-box">
                    <span className="spec-lbl">WEAVE SPECIALTY</span>
                    <strong className="spec-val">Topi Teni & Temple Spearhead Zari</strong>
                  </div>
                  <div className="artisan-spec-box">
                    <span className="spec-lbl">LOOM EXPERIENCE</span>
                    <strong className="spec-val">Augmenting 38 Years Pit-Loom Mastery</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Stacked Right Cards */}
            <div className="artisan-side-cards">
              
              <div className="artisan-mini-card">
                <div className="mini-card-img-wrap">
                  <img src="/assets/images/moment_bridal_1790677986942.jpg" alt="Kasuti Needlework Artisans" />
                  <span className="mini-tag">ARTISAN</span>
                </div>
                <div className="mini-card-content">
                  <span className="mini-subtag">KASUTI NEEDLEWORK ARTISANS</span>
                  <h3 className="mini-title">Sunita Devi & Kasuti Circle</h3>
                  <p className="mini-desc">
                    Expert thread-artists crafting legendary Kasuti (Gopura, Murugi, Ilkal) hand motif embellishments on heritage saree markings.
                  </p>
                  <span className="mini-footer-spec">Specialty: Peacock Chevron & Lotus Borders</span>
                </div>
              </div>

              <div className="artisan-mini-card">
                <div className="mini-card-img-wrap">
                  <img src="/assets/images/cat_family_1790677768539.jpg" alt="Showroom Draping Guild" />
                  <span className="mini-tag">GUILD</span>
                </div>
                <div className="mini-card-content">
                  <span className="mini-subtag">SHOWROOM & DRAPERS</span>
                  <h3 className="mini-title">Showroom Draping Guild</h3>
                  <p className="mini-desc">
                    In-house ethnic specialists assisting families with regional traditions, custom stitched blouse pairings, and global live video draping consultations.
                  </p>
                  <span className="mini-footer-spec">Fluency: Kannada, Hindi, Marathi, English</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Values Woven into Every Thread (4 Brand Pillars) */}
      <section className="section-padding values-pillars-section">
        <div className="container">
          
          <div className="text-center section-header-center">
            <div className="collections-subtag center-subtag">
              <span className="line-dec"></span>
              THE JAIN CLOTH CENTRE PILLARS
              <span className="line-dec"></span>
            </div>
            <h2 className="section-title">Values Woven into Every Thread</h2>
            <p className="section-subtitle center-max-640">
              Our commitments remain unbroken whether you step into our showroom on Main Bazar Road or consult our stylists from London, California, or Bengaluru.
            </p>
          </div>

          <div className="pillars-grid-2x2">
            
            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div className="pillar-title-wrap">
                  <h3 className="pillar-title">Authenticity Without Compromise</h3>
                  <span className="pillar-badge">100% GUARANTEED</span>
                </div>
              </div>
              <p className="pillar-desc">
                Every pure silk piece is backed by Silk Mark authorization and Karnataka Handloom GI Certification #43. Zero synthetic blends masquerading as natural fibers.
              </p>
              <div className="pillar-footer">
                <span>PURE SILK STANDARD</span>
                <span className="sep">•</span>
                <span>GI REGISTRATION NO. 43 CERTIFIED</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Handshake size={22} />
                </div>
                <div className="pillar-title-wrap">
                  <h3 className="pillar-title">Direct Artisan Dignity</h3>
                  <span className="pillar-badge">FAIR TRADE</span>
                </div>
              </div>
              <p className="pillar-desc">
                We eliminate middleman exploiters. Pay flows directly into weavers' families, safeguarding rural livelihoods and sustaining centuries-old pit-loom knowledge in Ilkal.
              </p>
              <div className="pillar-footer">
                <span>EQUAL WAGE EMPOWERMENT</span>
                <span className="sep">•</span>
                <span>DIRECT ARTISAN PARTNERSHIPS</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Users size={22} />
                </div>
                <div className="pillar-title-wrap">
                  <h3 className="pillar-title">Curated Family Togetherness</h3>
                  <span className="pillar-badge">FAMILIES FIRST</span>
                </div>
              </div>
              <p className="pillar-desc">
                We design coordinated ensembles: matching wedding outfits for the couple, dignified drapes for elders, and comfortable festive wear for children.
              </p>
              <div className="pillar-footer">
                <span>FESTIVE SUPPORT</span>
                <span className="sep">•</span>
                <span>BRIDAL, GROOM & CHILDREN IDEAS</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Globe size={22} />
                </div>
                <div className="pillar-title-wrap">
                  <h3 className="pillar-title">Global Diaspora Bridge</h3>
                  <span className="pillar-badge">200+ COUNTRIES</span>
                </div>
              </div>
              <p className="pillar-desc">
                Seamless international DHL delivery with insured door-to-door transit, fall-and-picco pre-finished, and bespoke video consultation appointments.
              </p>
              <div className="pillar-footer">
                <span>GLOBAL LOGISTICS</span>
                <span className="sep">•</span>
                <span>INSURED DOORSTEP DISPATCH</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Experience the Heritage Banner (Dark Burgundy Box) */}
      <section className="container section-margin-bottom">
        <div className="experience-heritage-banner">
          <div className="experience-banner-grid">
            
            <div className="experience-left-col">
              <div className="spotlight-curation-tag">
                <span className="gold-dot"></span>
                IN-PERSON OR VIDEO EXPERIENCE
              </div>

              <h2 className="experience-headline">
                Experience the Heritage in Person or Online
              </h2>

              <p className="experience-lead">
                Whether you are passing through Karnataka's historical temple circuit or curating a wedding trousseau from abroad, our doors and digital appointment desks are open to welcome your family.
              </p>

              <div className="experience-buttons-row">
                <button className="btn btn-gold-cta" onClick={() => navigateTo('collections')}>
                  <span>EXPLORE CURATED COLLECTIONS</span>
                  <ArrowRight size={16} />
                </button>
                <button className="btn btn-outline-light" onClick={() => setAppointmentModalOpen(true)}>
                  PLAN SHOWROOM VISIT TO ILKAL
                </button>
                <button className="btn btn-whatsapp-outline" onClick={openWhatsApp}>
                  <MessageCircle size={15} />
                  WHATSAPP DIRECT LINE: +91 93539 77262
                </button>
              </div>
            </div>

            {/* Right Side Info Card */}
            <div className="experience-right-card">
              <h3 className="hours-card-title">Showroom Hours & Location</h3>
              <ul className="hours-card-list">
                <li>
                  <MapPin size={16} className="icon-gold" />
                  <span>Main Bazar Road, Near Gandhi Chowk, Ilkal, Karnataka 587125</span>
                </li>
                <li>
                  <Clock size={16} className="icon-gold" />
                  <span>Open 7 Days a Week: 10:00 AM to 8:00 PM IST</span>
                </li>
                <li>
                  <Phone size={16} className="icon-gold" />
                  <span>+91 Store WhatsApp: +91 93539 77262</span>
                </li>
              </ul>
              <div className="hours-card-footer">
                MATCHING BLOUSE & TAILORING AVAILABLE
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
