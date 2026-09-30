import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const AppointmentModal = () => {
  const { appointmentModalOpen, setAppointmentModalOpen, showToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Bridal Saree & Lehenga Fitting',
    datetime: ''
  });

  if (!appointmentModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointmentModalOpen(false);
    showToast(`✨ Appointment Booked! Thank you ${formData.name}, our representative will contact you shortly.`);
    setFormData({ name: '', phone: '', category: 'Bridal Saree & Lehenga Fitting', datetime: '' });
  };

  return (
    <div className={`modal-backdrop ${appointmentModalOpen ? 'active' : ''}`}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={() => setAppointmentModalOpen(false)}>
          <X size={20} />
        </button>
        <h3 className="modal-title">Book a Store Appointment</h3>
        <p className="modal-desc">Schedule a personal fashion consultation with our ethnic wear experts.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Ananya Sharma" 
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
            <label className="form-label">Consultation Category</label>
            <select 
              className="form-select"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option>Bridal Saree & Lehenga Fitting</option>
              <option>Groom & Menswear Custom Tailoring</option>
              <option>Family Matching Outfits</option>
              <option>Bulk Wedding Gifting Orders</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Date & Time</label>
            <input 
              type="datetime-local" 
              className="form-input" 
              required 
              value={formData.datetime}
              onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Confirm Appointment Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
