import React, { createContext, useContext, useState, useEffect } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('landing'); 
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    // If user accesses /collections, /about, or any non-root path, clean to /
    if (typeof window !== 'undefined' && window.location.pathname !== '/' && window.location.pathname !== '') {
      window.history.replaceState(null, '', '/');
    }

    const handlePopState = () => {
      setCurrentPage('landing');
      if (window.location.pathname !== '/' && window.location.pathname !== '') {
        window.history.replaceState(null, '', '/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openQuickView = (item) => {
    setQuickViewItem(item);
  };

  const closeQuickView = () => {
    setQuickViewItem(null);
  };

  const navigateTo = (_page) => {
    setCurrentPage('landing');
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setAppointmentModalOpen = (open) => {
    if (open) {
      window.open("https://wa.me/919353977262?text=Namaste%20Jain%20Cloth%20Centre,%20I%20would%20like%20to%20book%20a%20store%20appointment%20and%20consultation.", "_blank");
    }
  };

  const setBulkModalOpen = (open) => {
    if (open) {
      window.open("https://wa.me/919353977262?text=Namaste%20Jain%20Cloth%20Centre,%20I%20have%20a%20bulk%20order%20inquiry.", "_blank");
    }
  };

  return (
    <UIContext.Provider value={{
      currentPage,
      setCurrentPage,
      navigateTo,
      appointmentModalOpen: false,
      setAppointmentModalOpen,
      bulkModalOpen: false,
      setBulkModalOpen,
      searchModalOpen,
      setSearchModalOpen,
      quickViewItem,
      openQuickView,
      closeQuickView,
      toastMessage,
      showToast
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
