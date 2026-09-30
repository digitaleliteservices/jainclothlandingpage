import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useUI } from '../../context/UIContext';
import { categoriesData, lookbookData } from '../../data/collectionsData';

const SearchModal = () => {
  const { searchModalOpen, setSearchModalOpen, openQuickView } = useUI();
  const [query, setQuery] = useState('');

  if (!searchModalOpen) return null;

  const allItems = [...categoriesData, ...lookbookData];
  const filtered = query.trim() 
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="modal-backdrop active">
      <div className="modal-box" style={{ maxWidth: '500px' }}>
        <button className="modal-close-btn" onClick={() => { setSearchModalOpen(false); setQuery(''); }}>
          <X size={20} />
        </button>
        <h3 className="modal-title">Search Jain Cloth Centre</h3>
        <div className="form-group" style={{ marginTop: '16px' }}>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Search sarees, lehengas, sherwanis, kids..." 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div style={{ maxHeight: '250px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {!query.trim() && (
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Type above to search collections...</p>
          )}

          {query.trim() && filtered.length === 0 && (
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>No matching collections found.</p>
          )}

          {filtered.map((item, idx) => (
            <div 
              key={idx} 
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '8px', background: '#fff', cursor: 'pointer' }}
              onClick={() => {
                setSearchModalOpen(false);
                setQuery('');
                openQuickView(item);
              }}
            >
              <img src={item.image} alt={item.title} style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-primary-dark)' }}>{item.title}</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
