import React from 'react';
import { X } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const QuickViewModal = () => {
  const { quickViewItem, closeQuickView, setAppointmentModalOpen, setBulkModalOpen } = useUI();

  if (!quickViewItem) return null;

  return (
    <div className="modal-backdrop active">
      <div className="modal-box" style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={closeQuickView}>
          <X size={20} />
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div>
            <img src={quickViewItem.image} alt={quickViewItem.title} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div>
            <span className="badge-pill gold" style={{ fontSize: '0.6875rem', marginBottom: '8px' }}>JAIN CLOTH EXCLUSIVE</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
              {quickViewItem.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              {quickViewItem.desc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                className="btn btn-primary btn-sm" 
                style={{ backgroundColor: '#25D366', color: '#FFFFFF', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                onClick={() => {
                  closeQuickView();
                  const text = encodeURIComponent(`Namaste Jain Cloth Centre, I am inquiring about: ${quickViewItem.title}`);
                  window.open(`https://wa.me/919353977262?text=${text}`, '_blank');
                }}
              >
                Inquire on WhatsApp
              </button>
              <button 
                className="btn btn-primary btn-sm" 
                onClick={() => {
                  closeQuickView();
                  const text = encodeURIComponent(`Namaste Jain Cloth Centre, I would like to book a store visit and fitting for: ${quickViewItem.title}`);
                  window.open(`https://wa.me/919353977262?text=${text}`, '_blank');
                }}
              >
                Book Store Visit & Fitting
              </button>
              <button 
                className="btn btn-secondary btn-sm" 
                onClick={() => {
                  closeQuickView();
                  const text = encodeURIComponent(`Namaste Jain Cloth Centre, I would like to inquire about a bulk order for: ${quickViewItem.title}`);
                  window.open(`https://wa.me/919353977262?text=${text}`, '_blank');
                }}
              >
                Inquire Bulk Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
