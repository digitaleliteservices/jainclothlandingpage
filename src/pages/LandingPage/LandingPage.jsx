import React from 'react';
import './LandingPage.css';

import AnnouncementBar from './components/AnnouncementBar';
import LandingNavbar from './components/LandingNavbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import HeritageSection from './components/HeritageSection';
import FeaturedCollections from './components/FeaturedCollections';
import BridalSection from './components/BridalSection';
import MenKidsSection from './components/MenKidsSection';
import BrandStorySection from './components/BrandStorySection';
import TrustSection from './components/TrustSection';
import BulkOrderSection from './components/BulkOrderSection';
import InstagramSection from './components/InstagramSection';
import StoreSection from './components/StoreSection';
import FinalCTA from './components/FinalCTA';
import LandingFooter from './components/LandingFooter';

const LandingPage = () => {
  return (
    <div className="landing-page-root">
      <AnnouncementBar />
      <LandingNavbar />
      <main>
        <HeroSection />
        <CategorySection />
        <HeritageSection />
        <FeaturedCollections />
        <BridalSection />
        <MenKidsSection />
        <BrandStorySection />
        {/* <TrustSection /> */}
        <BulkOrderSection />
        <InstagramSection />
        <StoreSection />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
