import React, { createContext, useContext, useState, useEffect } from 'react';

const UIContext = createContext();

const getInitialPage = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/$/, '');
  if (path === '/landing' || path === '/jain-cloth-landing') return 'landing';
  if (path === '/collections') return 'collections';
  if (path === '/about') return 'about';
  return 'home';
};

export const UIProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(getInitialPage); 
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
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

  const navigateTo = (page) => {
    setCurrentPage(page);
    let path = '/';
    if (page === 'landing') path = '/landing';
    else if (page === 'collections') path = '/collections';
    else if (page === 'about') path = '/about';

    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <UIContext.Provider value={{
      currentPage,
      setCurrentPage,
      navigateTo,
      appointmentModalOpen,
      setAppointmentModalOpen,
      bulkModalOpen,
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
