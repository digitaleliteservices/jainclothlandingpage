import React from 'react';
import { UIProvider, useUI } from './context/UIContext';
import LandingPage from './pages/LandingPage/LandingPage';

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
  return (
    <>
      <LandingPage />
      {/* Global Modals & Notifications */}
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
