import React from 'react';
import './LandingPage.css';

import AnnouncementBar from './components/AnnouncementBar';
import LandingNavbar from './components/LandingNavbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import HeritageSection from './components/HeritageSection';
import CollectionsGrid from '../../components/CollectionsGrid';
import HeritageSarees from '../../components/HeritageSarees';
import SpecialMoments from '../../components/SpecialMoments';
import Generations from '../../components/Generations';
import BulkOrdersBox from '../../components/BulkOrdersBox';
import DestinationStore from '../../components/DestinationStore';
import TrustSection from './components/TrustSection';
import GallerySection from './components/GallerySection';
import StoreSection from './components/StoreSection';
import FinalCTA from './components/FinalCTA';
import LandingFooter from './components/LandingFooter';
import ScrollToTop from './components/ScrollToTop';

const LandingPage = () => {
  return (
    <div className="landing-page-root">
      <AnnouncementBar />
      <LandingNavbar />
      <main>
        <HeroSection />
        <CategorySection />
        <HeritageSection />
        {/* <FeaturedCollections /> */}
        <CollectionsGrid />
        <HeritageSarees />
        {/* <BridalSection /> */}
        <SpecialMoments />
        <Generations />
        <BulkOrdersBox />
        {/* <MenKidsSection /> */}
        {/* <BrandStorySection /> */}
        <DestinationStore />
        <TrustSection />
        {/* <BulkOrderSection /> */}
        <GallerySection />
        <StoreSection />
        <FinalCTA />
      </main>
      <LandingFooter />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
