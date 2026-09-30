import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const BulkModal = () => {
  const { bulkModalOpen, setBulkModalOpen, showToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '25 – 50 Sarees / Sets',
    details: ''
  });

  if (!bulkModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBulkModalOpen(false);
    showToast(`📦 Wholesale Inquiry Submitted! Thank you ${formData.name}, our specialist will connect via WhatsApp.`);
    setFormData({ name: '', phone: '', quantity: '25 – 50 Sarees / Sets', details: '' });
  };

  return (
    <div className={`modal-backdrop ${bulkModalOpen ? 'active' : ''}`}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={() => setBulkModalOpen(false)}>
          <X size={20} />
        </button>
        <h3 className="modal-title">Bulk & Wedding Inquiry</h3>
        <p className="modal-desc">Get customized pricing for bulk sarees, groomsmen sets, and wedding gifts.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Rajesh Jain" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone / WhatsApp Number</label>
            <input 
              type="tel" 
              className="form-input" 
              placeholder="+91 98765 43210" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Estimated Order Quantity</label>
            <select 
              className="form-select"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            >
              <option>10 – 25 Sarees / Sets</option>
              <option>25 – 50 Sarees / Sets</option>
              <option>50 – 100+ Sarees / Sets</option>
              <option>Full Wedding Trousseau Package</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Details / Requirements</label>
            <textarea 
              className="form-textarea" 
              rows={3} 
              placeholder="Specify color themes, delivery date, or special packaging instructions..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '10px' }}>
            Submit Wholesale Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkModal;
