import React from 'react';
import { UIProvider, useUI } from './context/UIContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionsGrid from './components/CollectionsGrid';
import HeritageSarees from './components/HeritageSarees';
import SpecialMoments from './components/SpecialMoments';
import Generations from './components/Generations';
import BulkOrdersBox from './components/BulkOrdersBox';
import DestinationStore from './components/DestinationStore';
import LookbookGrid from './components/LookbookGrid';
import StoreLocation from './components/StoreLocation';
import CollectionsPage from './components/CollectionsPage';
import AboutPage from './components/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer';

import AppointmentModal from './components/modals/AppointmentModal';
import BulkModal from './components/modals/BulkModal';
import QuickViewModal from './components/modals/QuickViewModal';
import SearchModal from './components/modals/SearchModal';

const ToastNotification = () => {
  const { toastMessage } = useUI();
  return (
    <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
      <span>{toastMessage}</span>
    </div>
  );
};

const MainContent = () => {
  const { currentPage } = useUI();

  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage />
        <AppointmentModal />
        <BulkModal />
        <QuickViewModal />
        <SearchModal />
        <ToastNotification />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {currentPage === 'collections' ? (
          <CollectionsPage />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <CollectionsGrid />
            <HeritageSarees />
            <SpecialMoments />
            <Generations />
            <BulkOrdersBox />
            <DestinationStore />
            <LookbookGrid />
            <StoreLocation />
          </>
        )}
      </main>
      <Footer />

      {/* Global Modals & Notifications */}
      <AppointmentModal />
      <BulkModal />
      <QuickViewModal />
      <SearchModal />
      <ToastNotification />
    </>
  );
};

function App() {
  return (
    <UIProvider>
      <MainContent />
    </UIProvider>
  );
}

export default App;
