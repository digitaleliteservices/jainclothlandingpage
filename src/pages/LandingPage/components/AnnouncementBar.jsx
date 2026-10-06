import React from 'react';
import { Sparkles } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="landing-announcement-bar">
      <div className="landing-announcement-content">
        <Sparkles size={14} style={{ color: '#C59B27' }} />
        <span>50+ Years of Trusted Fashion • Heritage • Craftsmanship • Style</span>
        <Sparkles size={14} style={{ color: '#C59B27' }} />
      </div>
    </div>
  );
};

export default AnnouncementBar;
